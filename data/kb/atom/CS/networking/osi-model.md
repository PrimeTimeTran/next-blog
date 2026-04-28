---
tags: []
---

# OSI Model — Atom

## Definition

The OSI (Open Systems Interconnection) model is a conceptual framework that standardizes how data is transmitted across a network using seven layered abstraction levels.

---

## Core Idea

Communication is divided into **layers**, where each layer:

- has a specific responsibility
- communicates only with adjacent layers
- adds or removes its own metadata (encapsulation)

---

## The 7 Layers (Top → Bottom)

### 7. Application

- Interface for user-facing network services
- Examples: HTTP, HTTPS, FTP, DNS

### 6. Presentation

- Data formatting, encryption, compression
- Examples: TLS/SSL, encoding (UTF-8), serialization (JSON)

### 5. Session

- Manages sessions between systems
- Handles connection establishment, maintenance, termination

### 4. Transport

- End-to-end delivery
- Reliability, flow control, segmentation
- Examples: TCP (reliable), UDP (fast)

### 3. Network

- Logical addressing and routing
- Handles path selection across networks
- Examples: IP, ICMP, routers

### 2. Data Link

- Node-to-node delivery on same network
- MAC addressing, error detection
- Examples: Ethernet, Wi-Fi

### 1. Physical

- Transmission of raw bits over medium
- Electrical signals, light, radio waves

---

## Key Mechanism: Encapsulation

Data moves downward through layers:

Application data  
→ Segment (Transport)  
→ Packet (Network)  
→ Frame (Data Link)  
→ Bits (Physical)

Reverse happens on receive (decapsulation).

---

## Mental Model

- Upper layers = **what data means**
- Middle layers = **how data moves reliably**
- Lower layers = **how data physically travels**

---

## Key Insight

OSI is not how the internet is built exactly—it is a **teaching and debugging model** that helps isolate where problems occur.

---

## Common Uses

- Networking education
- Debugging network issues
- Designing distributed systems
- Mapping protocols to responsibilities

---

# Related

- TCP/IP Model
- TCP vs UDP
- Packet vs Frame
- DNS Resolution Flow
- HTTP Request Lifecycle
