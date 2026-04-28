## 🧠 Consistency Models in Distributed Systems

### Core idea

A consistency model defines **what a system guarantees about the visibility and ordering of data updates across multiple nodes**.

In distributed systems, data is often replicated, so consistency models describe:

> _When and how different users see the same data after changes._

---

# 🌐 Why consistency models exist

In a single machine:

- reads and writes are immediate and consistent

In distributed systems:

- network delays
- replication lag
- partitioning

So systems must choose trade-offs between:

- correctness
- availability
- performance

---

# 🧱 Main consistency models

## 1. Strong Consistency

> Every read returns the most recent write.

### Behavior

- All nodes appear synchronized
- Reads always reflect the latest committed value

### Trade-off

- Slower
- Less available under network issues

### Example

- Traditional relational databases (single leader setups)
- Distributed systems with strict coordination

---

## 2. Eventual Consistency

> If no new updates occur, all replicas will converge to the same value.

### Behavior

- Reads may return stale data temporarily
- System prioritizes availability and speed

### Trade-off

- Inconsistency for a short period
- Simpler scaling

### Example

- DNS
- Dynamo-style databases
- many NoSQL systems

---

## 3. Causal Consistency

> Operations that are causally related are seen in the same order everywhere.

### Behavior

- “If A caused B, everyone sees A before B”
- Unrelated operations may be seen in different orders

### Trade-off

- More complex than eventual consistency
- Less strict than strong consistency

### Example

- social media feeds (likes, replies)

---

## 4. Read-Your-Writes Consistency

> After you write something, you will always see your own update.

### Behavior

- Guarantees user-level consistency
- Does not guarantee global consistency

### Example

- user profiles
- personal dashboards

---

## 5. Monotonic Reads

> Once you read a value, you will never see an older version later.

### Behavior

- Prevents “time reversal” in reads

---

# 🧠 Mental model

```text
Stronger consistency
      ↑
      |
Strong consistency
Causal consistency
Read-your-writes
Monotonic reads
Eventual consistency
      |
      ↓
Higher availability & speed
```

---

# ⚖️ Key trade-off

> You cannot simultaneously maximize consistency, availability, and partition tolerance (CAP constraint).

Consistency models are ways of choosing _where you compromise_.

---

# 🔗 How this connects in system design

Consistency models influence:

- database choice (SQL vs NoSQL)
- caching behavior
- replication strategy
- user experience design

Examples:

- banking systems → strong consistency
- social feeds → eventual consistency
- collaborative apps → causal consistency

---

# 📌 Key takeaway

> A consistency model is a contract that defines how “up-to-date” data appears across distributed systems under replication and failure conditions.
