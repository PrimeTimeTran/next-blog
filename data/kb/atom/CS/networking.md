# Networking

## Definition

Networking is the study of how computers exchange data over interconnected systems using standardized protocols.

## Core Idea

Data is broken into small units, transmitted across nodes, and reassembled at the destination through layered [[protocols]].

## Key Components

- **Nodes** → devices (computers, routers, servers)
- **Links** → physical/logical connections between nodes
- **Packets** → smallest transferable unit of data
- **Protocols** → rules governing communication (e.g., TCP/IP)

## Layer Model (Mental Model)

- **Application** → user-facing protocols (HTTP, DNS)
- **Transport** → reliability & delivery (TCP, UDP)
- **Network** → routing (IP)
- **Link** → local delivery (Ethernet, Wi-Fi)
- **Physical** → raw signal transmission

## Key Insight

Networking works by **encapsulation + abstraction**:
each layer wraps data with its own metadata and delegates responsibility downward.

## Example

Sending a web request:

1. HTTP request created (Application)
2. Wrapped in TCP segment (Transport)
3. Wrapped in IP packet (Network)
4. Wrapped in Ethernet frame (Link)
5. Sent as electrical/radio signals (Physical)

## Common Problems

- Latency (delay)
- Packet loss
- Congestion
- Routing inefficiency

# Related

- TCP vs UDP
- IP Addressing
- [[osi-model|OSI Model]]
- DNS
- HTTP Request Lifecycle
