---
draft: false
date: 2025-04-19
title: 'System Design: Build a Message Queue'
summary: 'Decouple, distribute, and scale: A message queue lets your app handle tasks asynchronously, improving performance, reliability, and system flexibility.'
tags: ['system design']
---

# Introduction

<img src="/static/gifs/message_queue.gif" alt="preview" />
Adding a **message queue** to your system provides several key benefits:

1. **Decoupling**

   - Producers (services that send messages) and consumers (services that receive messages) do not need to be aware of each other’s implementation or even be available at the same time. This decoupling allows each component to be modified, scaled, or redeployed independently.

2. **Asynchronous Processing**

   - Producers can send messages to the queue and continue processing without waiting for the consumer to finish its work. This improves response times and user experience.

3. **Load Leveling (Buffering)**

   - When there is a spike in demand, the queue acts as a buffer, preventing consumers from being overwhelmed. This smooths out load and reduces system bottlenecks.

4. **Scalability**

   - Consumers can be added dynamically to process messages faster if the queue grows too large, enabling horizontal scaling.

5. **Reliability and Durability**

   - Most message queues provide persistence, ensuring that messages are not lost if a consumer fails. They are stored safely until they are successfully processed.

6. **Retry and Error Handling**

   - Failed message processing can be retried automatically, and unprocessable messages can be redirected to a "dead letter queue" for analysis.

7. **Event-Driven Architecture Support**

   - Message queues make it easier to implement event-driven systems, where components react to events as they happen.

8. **Transaction Support**

   - Some message queue systems allow for transactions, ensuring that messages are processed exactly once, even in the event of a failure.

9. **Reduced Coupling Time Dependencies**

   - Services don’t need to be up and running at the same time. A producer can send a message to the queue, and the consumer can process it when it becomes available.

10. **Monitoring and Analytics**

    - Many message queue systems offer tools to monitor message flow, processing times, and bottlenecks, which can be invaluable for debugging and optimization.

## Key Components:

- [Flask](https://flask.palletsprojects.com/en/stable/) - Handles HTTP requests.
- [Redis Queue (RQ)](https://github.com/Parallels/rq-dashboard) - Manages asynchronous database writes.
- [SQLAlchemy](https://www.sqlalchemy.org/) - Stores the messages.
- Worker Task (save_message) - Runs in the background to write to the DB.

## Tutorial

### 1. Setup Project

Create standard Flask project & install dependencies. While here create the files which'll hold our message queue logic.

```sh
mkdir system_design_message_queue
cd system_design_message_queue
python3 -m venv venv
source venv/bin/activate
pip3 install Flask flask_sqlalchemy rq redis rq_dashboard
touch app.py task_queue.py models.py worker.py
```

### 2. Define Entrypoint

The app entrypoint. We instantiate the queue on line `13-14` & then use it on lines `27-28`.

```py:./app.py showLineNumbers {13-14, 27-28}
from flask import Flask, request, jsonify
from redis import Redis
from rq import Queue
import rq_dashboard

from models import db, Message

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///messages.db"
app.config.from_object(rq_dashboard.default_settings)

db.init_app(app)
redis_conn = Redis()
queue = Queue(connection=redis_conn)

with app.app_context():
    db.create_all()


@app.route("/add_message", methods=["POST"])
def add_message():
    data = request.get_json()
    if not data or "content" not in data:
        return jsonify({"error": "Content is required"}), 400

    content = data["content"]
    job = queue.enqueue("task_queue.save_message", content)
    return jsonify({"message": "Message enqueued", "job_id": job.get_id()}), 202


@app.route("/messages", methods=["GET"])
def get_messages():
    messages = Message.query.all()
    return jsonify(
        [{"id": m.id, "content": m.content, "timestamp": m.timestamp} for m in messages]
    )


if __name__ == "__main__":
    app.run(debug=True)
```

### 3. Define task_queue.py

This is the worker which'll handle the processing of business logic from the queue(assuming we call `task_queue.save_message`). Read the [RQ Docs](https://python-rq.org/docs/workers) to learn more about how it works.

```py:./task_queue.py showLineNumbers
def save_message(content):
    from app import app, db, Message

    with app.app_context():
        message = Message(content=content)
        db.session.add(message)
        db.session.commit()
```

### 4. Define models.py

A simple [SQLAlchemy](https://www.sqlalchemy.org/) model for persisting our messages to disk.

```py:./models.py showLineNumbers
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(255), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
```

### 5. Startup App/Worker/Dashboard

```sh
python3 app.py
rq worker           # new window
rq-dashboard        # new window
```

### 6. Create Test Message

```sh
curl -X POST http://127.0.0.1:5000/add_message \
     -H "Content-Type: application/json" \
     -d '{"content": "Hello from Flask Queue!"}'

{
  "job_id": "092f6680-67ac-4da6-bc0e-c05171b908b6",
  "message": "Message enqueued"
}
```

<br />
## Conclusion
<img src="/static/gifs/message_queue.gif" alt="preview" />

You should not see that you can add messages to the queue using a simple curl request. It took relatively little code. Nice~!
