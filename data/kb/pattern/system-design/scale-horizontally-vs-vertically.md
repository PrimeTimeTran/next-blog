# Pattern: Horizontal vs Vertical Scaling Decision

## Intent

Guide how to choose between scaling up a single machine (vertical scaling) or distributing load across multiple machines (horizontal scaling) in system design problems.

---

## When this pattern applies

Use this pattern when:

- A system is hitting performance or capacity limits
- You are asked to “make it scale”
- You need to improve throughput, latency, or availability
- You are evaluating architecture tradeoffs

---

## Core decision framework

### Vertical scaling (scale up)

Increase resources on a single machine:

- CPU
- RAM
- Disk

**Choose when:**

- Early-stage systems or MVPs
- Simpler architecture is preferred
- State is hard to distribute
- Low operational complexity is critical

**Signals:**

- Workload fits on one strong machine
- Simplicity > fault tolerance requirements

---

### Horizontal scaling (scale out)

Add more machines and distribute load.

**Choose when:**

- High availability is required
- Traffic is unpredictable or large-scale
- System must tolerate failures
- Growth is expected beyond single-machine limits

**Signals:**

- Need redundancy
- Bottleneck is throughput, not compute per node

---

## Tradeoff lens

| Dimension       | Vertical              | Horizontal                  |
| --------------- | --------------------- | --------------------------- |
| Complexity      | Low                   | High                        |
| Fault tolerance | Low                   | High                        |
| Cost scaling    | Expensive at high end | Linear scaling              |
| State handling  | Simple                | Complex (distributed state) |
| Ceiling         | Hard limit (hardware) | Very high                   |

---

## Key mental model

> Vertical scaling buys simplicity.
> Horizontal scaling buys resilience and scale.

---

## Decision heuristic

Prefer vertical scaling if:

- system is small/early
- failure tolerance is not critical
- speed of development matters

Prefer horizontal scaling if:

- uptime matters
- load is expected to grow significantly
- system already exceeds single-machine limits

---

## Common failure mode

> Over-engineering horizontal scaling too early

Many systems become unnecessarily complex by distributing state before it is required.

---

# Related patterns

- Stateless service design
- Load balancing strategy
- Partitioning (sharding)
- CAP tradeoffs

---

# 🧠 Why this is a _pattern note_ (not a recipe)

Because it answers:

> “How do I decide between two architecture strategies?”

Not:

- how to implement scaling
- not step-by-step instructions
- not a specific system design problem solution
