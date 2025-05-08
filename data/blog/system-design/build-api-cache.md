---
draft: false
date: '2017-08-21'
title: 'System Design: Build a Server Side Cache'
summary: 'Implement a server-side cache for faster and scalable systems. Caching results to DB queries can speed up server responses & by not overloading our DB with duplicate queries.'
tags: ['system design', 'redis', 'flask', 'python']
---

# Introduction

Design a backend API which caches **client responses** for **subsequent requests**.

<img src="/static/gifs/system-design-cache.gif" alt="preview" />

[Github Repo](https://github.com/PrimeTimeTran/system_design_api_cache)

In this post we'll create a simple API endpoint, `/data`, which serves either **fresh** or **cached** data depending on how recently this data was queried.

We'll use [Flask](https://flask.palletsprojects.com/en/stable) & [Redis](https://redis.io/docs/latest) to accomplish this task.

## Overview

1. Setup Project Repo.
2. Install Dependencies.
3. Define REST API which serves cached responses.
4. Run Redis & Server.
5. Check Results.

## Implementation

### 1. Setup Project Repo

```sh
mkdir system_design_api_cache
cd system_design_api_cache

python3 -m venv venv
source venv/bin/activate
```

### 2. Install Dependencies

```sh
pip3 install flask redis
```

### 3. Define REST API serving cached responses

      - 3a. Initialize Cache using Redis:
        - 1. First we initialize a Redis cache on line `7`.
        - 2. Define `cache_key()` which uses the full path of the route as a key on lines `11-13`.
        - 3. Store values in cache using the hashed **path/key** from line `18` on line `22`.
        - 4. Set the expiration datetime of this cache entry on line `23`.
      - 3b. Respond from Cache if possible:
        - 1. Use `cache.hgetall(key)` method to check the cache to use as a response.
        - 2. If `cached_response` exists then response with that **instead of a newly queried database** response.

<div className="tab-group">
  <div className="tab">
    <button id="#3a" className="tablinks">3A. Initialize Cache using Redis</button>
    <button id="#3b" className="tablinks">3B. Respond from Cache if possible</button>
  </div>

  <div id="#3a" className="tabcontent">
    ```py showLineNumbers {7, 11-13, 18, 22-23}
    from flask import Flask, request, jsonify
    import redis
    import hashlib
    from datetime import datetime

    app = Flask(__name__)
    cache = redis.StrictRedis(host="localhost", port=6379, db=0, decode_responses=True)

    CACHE_TIMEOUT = 5

    def cache_key():
        key = request.full_path
        return hashlib.sha256(key.encode()).hexdigest()


    @app.route("/data", methods=["GET"])
    def get_data():
        key = cache_key()

        data = {"message": f"Hello, this is fresh data at {datetime.now().isoformat()}"}
        timestamp = datetime.now().isoformat()
        cache.hmset(key, {"message": data["message"], "timestamp": timestamp})
        cache.expire(key, CACHE_TIMEOUT)
        return jsonify(
            {
                "source": "database",
                "data": data["message"],
                "cached_at": timestamp,
                "expires_in_seconds": CACHE_TIMEOUT,
            }
        )


    if __name__ == "__main__":
        app.run(debug=True)
    ```

  </div>
  <div id="#3b" className="tabcontent">
  ```py showLineNumbers {4, 6-20}
    @app.route("/data", methods=["GET"])
        def get_data():
        key = cache_key()
        cached_response = cache.hgetall(key)

        if cached_response:
            cache_timestamp = cached_response["timestamp"]
            expiration_time = (
                CACHE_TIMEOUT
                - (datetime.now() - datetime.fromisoformat(cache_timestamp)).seconds
            )

            return jsonify(
                {
                    "source": "cache",
                    "data": cached_response["message"],
                    "cached_at": cache_timestamp,
                    "expires_in_seconds": max(expiration_time, 0),
                }
            )

        data = {"message": f"Hello, this is fresh data at {datetime.now().isoformat()}"}
        timestamp = datetime.now().isoformat()
        cache.hmset(key, {"message": data["message"], "timestamp": timestamp})
        cache.expire(key, CACHE_TIMEOUT)
        return jsonify(
            {
                "source": "database",
                "data": data["message"],
                "cached_at": timestamp,
                "expires_in_seconds": CACHE_TIMEOUT,
            }
        )
    ```

  </div>
</div>

### 4. Run Redis & Server

```sh
redis-server
python3 main.py
```

### 5. Check Results

Open browser and navigate to `http://127.0.0.1:5000/data` and investigate the JSON response your server gives you.

<img src="/static/gifs/system-design-cache.gif" alt="preview" />

You should notice a few things:

1. If you navigate to the `data` route you sometimes get a **database** sourced response and sometimes a **cache**.
2. If you navigate to the `data` route with query string params, appending `?foo=bar` for example, you'll get newly cached responses.

## Conclusion

Redis is a simple `key-value` data store which can easily handle 1 million read/write operations per second with sub-millisecond latency.

For data we want to cache we append to the Redis cache/database an object under a `key` of our choosing.

In this case we used a `sha256` from Python's `hashlib` lib. However you don't have to use that algorithm and can use your own.

The cache was wrapped by a minimal Flask REST API which you can learn how to create in [this Flask API tutorial](./build-backend-api).
