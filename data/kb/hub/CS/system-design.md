## 🧭 System Design

### Purpose

This hub organizes the core concepts, patterns, and constraints used to design scalable, reliable distributed systems. It connects high-level design thinking with the underlying technical building blocks.

---

# 🧱 Core Design Frameworks

## [[system-design-delivery-framework|System Design Delivery Framework]]

- Structured approach to solving design problems
- Covers requirements → architecture → scaling → tradeoffs
- Focus: _how to communicate a design_

---

## Scalability Thinking Model

- Vertical vs horizontal scaling
- Bottlenecks and load distribution
- Stateless vs stateful systems

---

## Trade-off Thinking

- Consistency vs availability vs performance
- Cost vs complexity vs reliability
- Simplicity vs flexibility

---

# 🌐 Distributed Systems Fundamentals

## [[cap-theorem|Cap Theorem]]

- Consistency, Availability, Partition Tolerance
- Trade-offs under network failure conditions
- Foundation for distributed system behavior

---

## [[consistency-models|Consistency Models]]

- Strong consistency
- Eventual consistency
- Causal consistency

---

## Fault Tolerance

- Failure detection
- Redundancy
- Replication strategies

---

# 🧩 Core System Components

## [[databases|Databases]]

- [[SQL]] vs [[NoSQL]]
- Indexing and query optimization
- Replication and [[sharding]]

## Caching

- Cache-aside pattern
- Write-through vs write-back
- Cache invalidation problem

## Load Balancing

- [Round robin](round-robin), least connections
- Layer 4 vs Layer 7 balancing

## Message Queues

- Async processing
- Event-driven architecture
- Backpressure handling

---

# 🏗️ Architecture Patterns

## Microservices

- Service decomposition
- Independent deployment
- Communication overhead

## Monolith vs Distributed Systems

- Trade-offs in complexity
- Scaling implications

## Event-Driven Architecture

- Producers and consumers
- Event sourcing basics

---

# ⚙️ Reliability & Scaling Concepts

- Rate limiting
- Sharding strategies
- Partitioning strategies
- Failover mechanisms
- Circuit breakers
- [Fanout strategies](fanout-on-write-vs-fanout-on-read) (write vs read distribution)

---

# 🧠 Mental Model Map

```text
System Design
 ├── Design methodology (how to think)
 ├── Distributed systems theory (why things behave this way)
 ├── Components (what systems are built from)
 └── Patterns (how systems are structured)
```

---

# 🔗 Entry Points

Start here depending on goal:

- New to system design → System Design Delivery Framework
- Interview prep → Delivery Framework + CAP + caching + load balancing
- Deep understanding → CAP + consistency models + distributed systems theory
- Practical architecture → Components + patterns

---

# 📌 Relationship to other notes

- Uses **CAP theorem** as a foundational atom
- Uses **delivery framework** as execution structure
- Expands into:
  - distributed systems atoms
  - architecture pattern atoms
  - interview system design scenarios (future projects)

---

# ⚖️ Hub vs Atom clarity

| Type | Role                                                     |
| ---- | -------------------------------------------------------- |
| Hub  | Navigation + structure across system design domain       |
| Atom | Deep explanation of a single concept (e.g., CAP theorem) |

---

# 🧭 How this hub evolves

As you learn more, you’ll likely add:

- consistency models deep dive
- distributed locking
- consensus algorithms (Raft/Paxos)
- real-world system breakdowns (YouTube, Uber, etc.)

Each becomes its own atom linked here.

## Projects

- [[build-backend-api|Build API]]
