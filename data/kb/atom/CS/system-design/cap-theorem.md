# CAP Theorem

## Core Idea

A distributed system can guarantee at most **two of the following three properties** at the same time:

- **Consistency (C)**: All nodes see the same data at the same time.
- **Availability (A)**: Every request receives a response (success or failure).
- **Partition Tolerance (P)**: The system continues operating despite network partitions.

---

## Key Insight

When a **network partition occurs**, a system must choose between:

- **Consistency** → return correct but possibly delayed responses
- **Availability** → return responses that may be stale or inconsistent

You cannot have both during a partition.

---

## Common System Types

### CP (Consistency + Partition Tolerance)

- Prioritize correctness over uptime
- May reject or delay requests during failures
- Examples:
  - :contentReference[oaicite:0]{index=0}
  - :contentReference[oaicite:1]{index=1}

### AP (Availability + Partition Tolerance)

- Always respond, even if data is stale
- Eventual consistency is common
- Examples:
  - :contentReference[oaicite:2]{index=2}
  - :contentReference[oaicite:3]{index=3}

### CA (Consistency + Availability)

- Possible only when partitions are ignored (i.e., not truly distributed)
- Example:
  - Traditional relational databases on a single node

---

## Practical Takeaways

- **Partition tolerance is non-negotiable** in real distributed systems.
- The real trade-off is **Consistency vs Availability during failures**.
- Many modern systems offer **tunable consistency** (you choose per request).

---

# Related

- [[Eventual Consistency]]
- [[Distributed Systems]]
- [[Quorum Reads and Writes]]
- [[Replication Strategies]]

---

## One-Line Summary

In a distributed system, **you can’t have both perfect consistency and full availability when the network breaks**.
