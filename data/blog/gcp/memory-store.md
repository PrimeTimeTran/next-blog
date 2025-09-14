---
draft: false
date: '2025-09-15'
title: 'System Design: Getting Started with Google Cloud Memory Store (Redis)'
summary: 'Learn how to set up and connect to Google Cloud Memory Store (Redis) from Cloud Run using a VPC connector.'
tags: ['system design', 'gcp', 'memory store', 'redis', 'cloud run', 'vpc']
---

# Introduction

Google Cloud Memory Store is a fully managed in-memory data store service for Redis and Memcached. It provides fast, scalable caching and session management for cloud applications. In this post, we'll walk through how to set up a Redis instance in Memory Store and connect to it securely from a Cloud Run service using a VPC connector.

# Why Use Memory Store?

- **Performance:** Sub-millisecond latency for caching and real-time data.
- **Scalability:** Easily scale your Redis instance as your application grows.
- **Managed Service:** No need to manage servers or handle failover manually.
- **Security:** Connect privately using VPC connectors and private IPs.

# Step-by-Step Setup

## 1. Create a Redis Instance

```sh
gcloud redis instances create my-redis \
    --size=1 \
    --region=[REGION] \
    --tier=standard \
    --project=[PROJECT-ID]
```

After creation, note the private IP address (e.g., `10.152.209.200`).

## 2. Create a VPC Connector

```sh
gcloud compute networks vpc-access connectors create my-connector \
    --region=[REGION] \
    --network=default \
    --range=10.10.0.0/28 \
    --project=[PROJECT-ID]
```

## 3. Deploy Cloud Run with the VPC Connector

```sh
gcloud run deploy my-service \
    --image gcr.io/my-project/my-image \
    --vpc-connector my-connector \
    --region=[REGION] \
    --project=[PROJECT-ID]
```

## 4. Connect to Redis from Your Code

Use the private IP and port 6379 to connect to Redis from your application code.

## 5. Update Existing Cloud Run Service to Use VPC Connector

```sh
gcloud run services update [SERVICE] \
    --vpc-connector=my-connector \
```

# Conclusion

Google Cloud Memory Store makes it easy to add fast, scalable caching to your cloud applications. By connecting through a VPC connector, you ensure secure, private access to your Redis instance from Cloud Run or other serverless services.

- Working, connects a Cloud Run Service to a connector

```sh
gcloud run services update [SERVICE] \
    --vpc-connector=my-connector \
    --region=[REGION] \
    --project=[PROJECT-ID]
```
