## 🔀 Fanout-on-Write vs Fanout-on-Read

### Core idea

These are two strategies for handling **data distribution in feed systems** (or any “one-to-many” relationship like posts → followers).

They answer:

> “When do we do the expensive work — when writing data or when reading it?”

---

# 🧱 The problem context

Example: social feed

- User A posts something
- 1M followers may need to see it

So we must decide:

- push updates now (write time)
- or compute later (read time)

---

# 📤 Fanout-on-Write (Push model)

## Idea

> When data is written, immediately push it to all relevant recipients.

---

## Flow

```text id="fw1"
User posts → system finds followers → pushes post into each feed
```

---

## Example

User A posts:

- system writes post once
- then copies it into each follower’s feed cache/table

---

## Pros

- fast reads (precomputed feeds)
- low latency for timeline load
- predictable read performance

---

## Cons

- expensive writes
- high fanout cost (viral posts = explosion)
- wasted work if followers never read

---

## Best for

- read-heavy systems
- stable follower graphs
- social feeds with predictable traffic

---

# 📥 Fanout-on-Read (Pull model)

## Idea

> Store data once, and compute the feed when a user requests it.

---

## Flow

```text id="fr1"
User opens feed → system fetches posts from followed users → merges/sorts live
```

---

## Example

- post stored once
- when user opens timeline:
  - fetch posts from all followees
  - merge + rank + return

---

## Pros

- cheap writes
- no duplication of data
- handles large fanouts naturally

---

## Cons

- slow reads
- expensive query aggregation
- harder to scale read latency

---

## Best for

- write-heavy systems
- low read frequency
- systems with strong caching layers

---

# ⚖️ Direct comparison

| Aspect                 | Fanout-on-Write | Fanout-on-Read |
| ---------------------- | --------------- | -------------- |
| Write cost             | High            | Low            |
| Read cost              | Low             | High           |
| Storage usage          | High            | Low            |
| Latency on read        | Fast            | Slower         |
| Viral content handling | Expensive       | Easier         |

---

# 🧠 Hybrid systems (real-world)

Most large systems don’t choose one — they combine both:

## Hybrid model

- Normal users → fanout-on-write
- High-follower users (celebrities) → fanout-on-read

```text id="hy1"
If followers < threshold → push
Else → pull
```

This avoids “celebrity problem” explosion.

---

# 🔥 Celebrity problem

Fanout-on-write fails when:

- 1 user has millions of followers
- one post triggers millions of writes instantly

So systems switch strategies dynamically.

---

# 🧠 Mental model

```text id="mm1"
Write-time work:
    push distribution cost upfront

Read-time work:
    compute aggregation on demand
```

---

# 🔗 Related concepts

- caching (precompute vs compute-on-demand)
- message queues (async fanout)
- feed ranking algorithms
- sharding (distribution of followers/posts)
- eventual consistency (delayed propagation)

---

# 📌 Key takeaway

> Fanout-on-write trades expensive writes for fast reads, while fanout-on-read trades cheap writes for expensive reads. Real systems usually combine both based on scale.
