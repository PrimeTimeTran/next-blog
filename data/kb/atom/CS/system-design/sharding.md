## 🧩 Sharding

### Core idea

Sharding is a technique for **splitting a large dataset or workload into smaller, independent pieces (“shards”)**, so the system can scale horizontally.

> Instead of one big database handling everything, multiple smaller databases each handle a portion of the data.

---

# 🧱 Mental model

```text
           ┌─────────────┐
           │  Client App  │
           └──────┬──────┘
                  │
        ┌─────────▼─────────┐
        │  Shard Router     │
        └───┬────┬────┬────┘
            │    │    │
        ┌───▼┐ ┌─▼──┐ ┌▼───┐
        │ S1 │ │ S2 │ │ S3 │
        └────┘ └────┘ └────┘
```

Each shard:

- stores a subset of data
- operates independently
- can live on separate machines

---

# 🎯 Why sharding exists

Without sharding:

- one database becomes a bottleneck
- storage limits are hit
- query latency increases

With sharding:

- scale horizontally
- distribute load
- improve fault isolation

---

# 🧠 Core idea

> Sharding = partitioning + distribution

But with a key constraint:

- each shard owns **a slice of the full dataset**

---

# 🔑 Common sharding strategies

## 1. Hash-based sharding

```text
shard = hash(user_id) % N
```

- evenly distributes data
- hard to range query

---

## 2. Range-based sharding

```text
A–F → Shard 1
G–M → Shard 2
N–Z → Shard 3
```

- good for range queries
- risk of uneven load (“hot shards”)

---

## 3. Directory-based sharding

```text
lookup_table[user_id] → shard_id
```

- flexible mapping
- requires extra lookup layer

---

# ⚖️ Sharding vs replication

| Concept     | Purpose                     |
| ----------- | --------------------------- |
| Sharding    | split data across nodes     |
| Replication | copy same data across nodes |

They are often used together.

---

# 🧩 Real-world examples

- User databases (each shard handles subset of users)
- Social media feeds
- Logging systems
- Large-scale e-commerce catalogs

---

# ⚠️ Trade-offs

## Pros

- horizontal scalability
- reduced load per node
- better write throughput

## Cons

- complex routing logic
- cross-shard queries are expensive
- rebalancing is difficult
- uneven shard distribution risk

---

# 🧠 Hard problems sharding introduces

- **rebalancing shards** when traffic grows
- **cross-shard joins**
- **hot partitions**
- **consistent hashing design**
- **transaction consistency across shards**

---

# 🔗 Relationship to other concepts

- Load balancing → routes requests
- Sharding → splits data
- Caching → reduces read load
- Consistent hashing → improves shard distribution stability

---

# 📌 Key takeaway

> Sharding is a horizontal scaling strategy that partitions data across multiple independent nodes so that no single database must handle the entire workload.
