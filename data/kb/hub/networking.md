# Networking (CS) — Hub

## Purpose

Networking covers how data moves between computers and systems across local and global infrastructures. It connects concepts from hardware, operating systems, distributed systems, and application protocols.

---

## Big Picture Model

Think of networking as a pipeline:

**Data → Segmentation → Transmission → Routing → Reassembly → Delivery**

Everything in networking is about:

- moving data reliably (or fast, or both)
- across unreliable shared systems
- using layered abstractions

---

## Core Areas

### 1. [[Networking Intro|Network Architecture]]

- Client-server model
- Peer-to-peer systems
- Distributed systems basics

### 2. Layered Models

- [[osi-model|OSI model]] (conceptual)
- TCP/IP model (practical)
- Encapsulation & decapsulation

### 3. Data Transfer

- Packets, frames, segments
- Packet switching vs circuit switching
- MTU (Maximum Transmission Unit)

### 4. Transport Layer

- TCP (reliable, ordered, connection-based)
- UDP (fast, connectionless)
- Flow control & congestion control

### 5. Network Layer

- IP addressing (IPv4 / IPv6)
- Routing algorithms
- Subnetting

### 6. Application Layer

- HTTP / HTTPS
- DNS
- WebSockets
- REST APIs (as network usage patterns)

---

## Key Mental Models

- **Encapsulation stack**  
   Each layer wraps data with its own metadata.
- **Best-effort delivery**  
   Networks do not guarantee success unless protocols enforce it.
- **Stateless vs stateful**  
   Some layers/protocols remember context (TCP), others don’t (IP, UDP).
- **Latency vs throughput tradeoff**  
   Faster response vs more total data per unit time.

---

## Common Failure Modes

- Packet loss
- Congestion
- Jitter
- DNS failures
- Routing loops / misconfigurations

---

# Related

- Distributed Systems
- Operating Systems
- [[security-devices|Security (CS)]]
- [[web-developmentWeb Development]]
- [[system-design|Systems Design]]

---

## Entry Questions (for learning)

- What happens when you type a URL and press enter?
- Why do packets arrive out of order?
- Why does TCP “feel reliable” even though the internet isn’t?
- How does DNS actually resolve a domain?
- What breaks when latency increases?

---

## Sub-Atoms (to create next)

- TCP vs UDP
- [[DNS]] resolution flow
- HTTP request lifecycle
- Subnetting basics
- NAT explained
- TCP handshake
- Congestion control
