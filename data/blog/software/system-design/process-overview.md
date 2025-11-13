---
draft: false
date: '2016-02-01'
title: 'System Design: Process Overview'
summary: 'A concise guide to the essential processes of system design, covering scalability, reliability, maintainability, availability, and trade-offs. This post introduces the core building blocks you need to design robust, efficient, and scalable systems—crucial knowledge for system design interviews.'
tags: ['system design']
---

# Introduction

System design meetings are essential for aligning teams on how a system should be built and operated. Their purpose is to collaboratively define requirements, clarify goals, and anticipate challenges before any code is written. By discussing architecture, scalability, reliability, and trade-offs early, these meetings:

- Prevent costly mistakes and rework by surfacing risks and edge cases in advance.
- Ensure everyone understands the system's purpose, constraints, and expected behavior.
- Foster shared ownership and clear communication between engineering, product, and stakeholders.
- Help teams design robust, maintainable, and scalable solutions that meet both functional and non-functional requirements.
- Enable proactive planning for growth, performance, and reliability, reducing future outages and bottlenecks.

A well-run system design meeting sets the foundation for successful projects and resilient systems.

## Outline

1. Requirements
2. Core Entities
3. API or interface
4. Data Flow
5. High-Level Design
6. Deep Dives

### 1. Requirements

Involves syncing with team on what we're building & what is out of scope.

- Functional: Behavior of the app
- Non functional: Qualities of the app

### 2. Core Entities

Involves discussing entities/resources which the system requires to achieve the sought functionality.

- Define models
- Define properties & data types
- Discuss tradeoffs.

### 3. API or Interface

Involves discussing how different components communicate with one another. REST, GraphQL, GRPC, Websockets are usually one of the choices followed by their appropriate follow ups.

- Define protocol
- Define routes
- Define parameters
- Define returns

### 4. Data Flow

Involves describing data flow, how information moves through the system—from user input, through APIs, business logic, databases, and back to the user or other services. In the system design process, mapping data flow helps:

- Visualize how components interact and depend on each other
- Identify bottlenecks, latency sources, and points of failure
- Ensure data is processed, stored, and retrieved efficiently and securely
- Satisfy non-functional requirements like scalability, reliability, and performance
- Clarify how requests, responses, and events propagate across the system

A clear data flow diagram is crucial for understanding the end-to-end journey of data and for making informed architectural decisions.

### 5. High-Level Design

Involves outlining the major components, their responsibilities, and how they interact to fulfill the system's requirements. This step bridges the gap between abstract requirements and concrete implementation. In the system design process, high-level design helps:

- Define the system's architecture (e.g., client-server, microservices, monolith)
- Identify key modules, services, and their relationships
- Map out data storage, communication patterns, and integration points
- Ensure the design meets functional requirements and sets the stage for non-functional qualities like scalability and reliability
- Provide a blueprint for engineers to follow, reducing ambiguity and miscommunication

A clear high-level design enables teams to move forward confidently, knowing the system's structure supports its goals and constraints.

### 6. Deep Dives

Involves focusing on non-functional requirements and critical details that impact system quality. After outlining the architecture and main components, Deep Dives allow you to:

- Analyze specific areas like scalability, consistency, latency, fault tolerance, and security.
- Explore trade-offs and edge cases that could affect reliability or performance.
- Validate that the design meets business goals under real-world conditions (e.g., high load, failures).
- Address questions like “How do we ensure low latency?”, “How do we guarantee consistency?”, and “Can the system scale as needed?”

In summary, Deep Dives ensure your design is robust, resilient, and ready for production by thoroughly examining the most important technical challenges.

## Fundamentals

1.  Storage

    **Relational**(SQL/normalized tables) vs **Document**(NoSQL/nested json) stores:

    - **ACID vs BASE**:

      - **ACID**:

        - **Atomicity**:

          "All or Nothing". A transaction must either complete fully or not at all. No partial changes.

        - **Consistency**:

          "Valid Before, Valid After". A transaction must move the database from one valid state to another, according to rules like constraints, triggers, etc.

        - **Isolation**:

          "Transactions Don’t Bump Into Each Other". Concurrent transactions should not interfere with each other. It's as if they ran sequentially.

        - **Durability**:

          "Once Committed, It Stays". Once a transaction is committed, it will survive crashes or power loss.

      - **BASE**:

        - **Basic Availability**:

          "System Always Responds". The system guarantees availability, even in the presence of failures.

          - You may not get the most up-to-date data, but you will get a response.
          - Prioritizes uptime over perfect accuracy.
          - Example:

            A read request might return stale data, but it won't fail.

        - **Soft State**:

          "State May Change Without Input". The system's state may change over time, even without new writes, due to asynchronous replication or internal updates.

          - The data may temporarily be inconsistent or incomplete.

          - This is tolerated because the system is designed to reconcile state over time.

          - Example:

            A document written to one replica may not appear on another immediately — but will sync later even without additional operations.

        - **Eventual Consistency**:

          "It Will Be Right… Eventually". Given enough time (and no new updates), all replicas of the data will converge to the same value.

          - There is no guarantee of immediate consistency across nodes.

          - Systems sacrifice consistency in the short term for availability and partition tolerance.

          - Example:

            You update your profile picture on your phone. It might not show up on your laptop instantly — but after a few seconds or minutes, it eventually does.

2.  Scalability

    How to scale it to support more users & requests.

    - Compute
      - Vertical(beefier machines with more storage/ram)
      - Horizontal(multiple machines)
    - Storage
      - Partitioning/Sharding:
      - Consistent Hashing:

3.  Networking

    - Application Layer:
      - HTTP/HTTPS
      - REST vs GraphQL vs GRPC
      - Restful Semantics
      - DNS Resolution
      - Websockets vs SSE
    - Transport Layer:

      - TCP:

        Transmission Control Protocol, is connection-oriented, reliable, and ensures data integrity and order, making it suitable for applications like web browsing and email.

      - UDP:

        User Datagram Protocol, is connectionless, faster, and prioritizes speed over reliability, making it ideal for applications like streaming and online gaming where a few lost packets are acceptable.

      - Request Response Lifecycle

    - Network Layer:
      - Load Balancing
      - Firewalls, ACLS

4.  Latency, Throughput & Performance

    -

5.  Fault Tolerance & Redundancy

    Failures are enviable

    - Replication strategies. Failure detection systems
    -

6.  CAP Theorem

    Consistency, availability, partition tolerance

    - Partition Tolerance: Guaranteed
    -

## How are System Design Interviews Evaluated?

1. Problem Solving: Identify & prioritize core challenges.
2. Solution Design: Create scalable architectures with balanced trade-offs.
3. Technical Excellence: Demonstrate deep knowledge and expertise.
4. Communication: Clearly explain complex concepts to stakeholders.
5. Steering: Focused on the problem with ability to avoid bike shedding or digressing.

# Conclusion

System design is the foundation for building robust, scalable, and maintainable systems. By following a structured process, teams can anticipate challenges, make informed trade-offs, and deliver solutions that meet both business and technical goals. Each step in the system design process plays a unique role in shaping the final architecture and ensuring project success.

| Step              | Purpose                                       | Benefits                                      |
| ----------------- | --------------------------------------------- | --------------------------------------------- |
| Requirements      | Define what the system must do                | Aligns team, prevents scope creep             |
| Core Entities     | Identify main data models/resources           | Clarifies storage needs, supports scalability |
| API or Interface  | Specify how components communicate            | Enables integration, ensures clarity          |
| Data Flow         | Map how data moves through the system         | Reveals bottlenecks, supports reliability     |
| High-Level Design | Outline architecture and major components     | Guides implementation, reduces ambiguity      |
| Deep Dives        | Address non-functional requirements in detail | Ensures performance, reliability, scalability |

A thoughtful approach to system design leads to resilient systems and successful projects.
