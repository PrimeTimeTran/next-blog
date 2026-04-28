## ⚖️Load Balancing in Distributed Systems

### Core idea

Load balancing is the process of **distributing incoming traffic across multiple servers or nodes** to ensure no single node becomes overloaded.

Goal:

> Improve availability, performance, and reliability by spreading work efficiently.

---

# 🧱 High-level architecture

```text id="lb1"
Clients
   ↓
Load Balancer
   ↓
Server Pool (A, B, C, ...)
```

The load balancer acts as a **traffic controller** between users and backend systems.

---

# 🎯 Why load balancing exists

Without it:

- one server gets overloaded
- latency increases
- failures cascade

With it:

- traffic is distributed
- systems scale horizontally
- failures are isolated

---

# 🧠 Core responsibilities

A load balancer typically handles:

- request distribution
- health checks (detect failed nodes)
- failover routing
- connection management
- sometimes SSL termination

---

# 🔁 Common distribution strategies

## 1. Round Robin

- rotates requests evenly across servers
- assumes equal capacity

## 2. Weighted Round Robin

- stronger servers get more traffic
- based on capacity weights

## 3. Least Connections

- sends traffic to least busy server
- good for long-lived requests

## 4. Least Response Time

- chooses fastest responding server

## 5. IP Hash / Sticky routing

- same client → same server
- useful for session-based systems

---

# 🌐 Types of load balancers

## 1. Layer 4 (Transport layer)

- routes based on IP + TCP/UDP
- fast, low overhead
- no knowledge of HTTP content

## 2. Layer 7 (Application layer)

- understands HTTP requests
- can route based on URL, headers, cookies
- more flexible but slower

---

# 🧩 Where load balancing appears in systems

## 1. Web services

- frontend → API servers

## 2. Databases (sometimes)

- read replicas distribution

## 3. Caching systems

- routing requests across cache nodes

## 4. Microservices

- service-to-service routing

---

# ⚠️ Key trade-offs

## Pros

- scalability
- fault tolerance
- improved latency distribution

## Cons

- added system complexity
- potential single point of failure (if not redundant)
- routing overhead

---

# 🧠 Mental model

```text id="lb2"
Load Balancing = Traffic distribution layer

Input → Decision → Routing → Healthy node
```

---

# 🔗 Relationship to other concepts

- **Round Robin** → simple distribution strategy
- **Consistent Hashing** → key-based distribution (not request-based)
- **CAP theorem** → influences design of distributed load-balanced systems
- **Caching** → often sits behind load balancers

---

# 📌 Key takeaway

> Load balancing is a system design pattern that distributes incoming traffic across multiple backend nodes to maximize availability, performance, and fault tolerance while minimizing overload on any single component.
