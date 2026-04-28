## 🔁 Round Robin (and related load distribution in caching systems)

### Core idea

Round robin is a **deterministic load distribution strategy** that assigns incoming requests to a rotating set of nodes in a fixed order.

In caching or distributed systems, it is used to:

> evenly spread requests across multiple cache nodes or servers without requiring runtime state analysis.

---

# 🧱 Basic round robin model

```text
Request 1 → Node A
Request 2 → Node B
Request 3 → Node C
Request 4 → Node A
...
```

Each node is selected in sequence, looping back to the start.

---

# 🧠 What you already understand (correct)

You’re right that it’s used for:

- balancing request load across nodes
- distributing traffic evenly
- avoiding single-node overload

Also correct:

- sometimes extended to consider CPU, memory, or current load (though that becomes _weighted or dynamic balancing_, not pure round robin)

---

# ⚠️ Key clarification: Round Robin vs Load-Aware Systems

## Pure Round Robin

- ignores system state
- no CPU awareness
- no request cost awareness
- no feedback loop

> It assumes all nodes are equal and all requests are equal

---

## Weighted Round Robin (important extension)

Nodes get different weights:

```text
A (weight 3), B (weight 1), C (weight 1)

A → A → A → B → C → A → A → A ...
```

Used when:

- nodes have different capacities
- some servers are stronger than others

---

## Least connections / CPU-aware (not round robin)

These are **adaptive strategies**, not round robin:

- Least connections → pick least busy node
- Least CPU → pick lowest utilization
- Latency-aware → pick fastest responding node

> These are dynamic; round robin is static.

---

# 🧠 Where round robin is actually used in caching

In caching systems, round robin is typically used for:

## 1. Cache sharding (simple distribution)

Assign keys or requests across cache nodes:

- Cache A
- Cache B
- Cache C

Used when:

- no consistent hashing
- no strong key locality requirement

---

## 2. Load balancing cache servers

Front layer distributes requests:

```text
Client → Load Balancer → Cache Nodes (RR)
```

---

## 3. Read distribution in replicated caches

If cache is replicated:

- reads can be spread across replicas using RR

---

# ⚠️ Big limitation (important insight)

Round robin does NOT consider:

- cache hit rate
- data locality
- request cost
- node load
- network latency
- key affinity

So it can accidentally:

- overload slow nodes
- break cache locality (hurting hit rates)
- increase cross-node traffic

---

# 🧠 Mental model hierarchy

```text
Load distribution strategies
 ├── Static (Round Robin)
 │     ├── simple RR
 │     └── weighted RR
 │
 ├── State-aware
 │     ├── least connections
 │     ├── CPU-based
 │     └── latency-based
 │
 └── Data-aware
       ├── consistent hashing
       └── locality-aware routing
```

---

# 🔗 Where round robin fits in system design

Round robin is typically used when:

- simplicity matters more than optimization
- nodes are assumed equivalent
- state tracking is expensive or unnecessary

It is often used in:

- load balancers (L4/L7)
- simple cache clusters
- request routing layers

---

# 📌 Key takeaway

> Round robin is a stateless, deterministic scheduling strategy that evenly distributes requests across nodes, but it does not account for system state or data locality—making it simple but not always optimal.
