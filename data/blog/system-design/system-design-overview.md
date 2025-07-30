---
draft: false
date: '2024-07-31'
title: 'System Design: Core Concepts'
summary: 'A concise guide to the essential principles of system design, covering scalability, reliability, maintainability, availability, and trade-offs. This post introduces the core building blocks you need to design robust, efficient, and scalable systems—crucial knowledge for system design interviews.'
tags: ['system design']
---

# Introduction

## Framework

1. Requirements
2. Core Entities
3. API or interface
4. Data Flow
5. High-Level Design
6. Deep Dives

## 1. Requirements

Agree

- Functional: Required features
- Non functional: Qualities, constraints, expectations

## 2. Core Entities

Typical map to database tables. Entities which the system will persist

## 3. API or Interface

Usually REST. Others like GraphQL/GRPC/Websockets work.

## 4. Data Flow

Satisfy non functional requirements

## 5. High-Level Design

Goal is to meet the functional requirements. Simple non functional design which allow users to achieve function.

## 6. Deep Dives

Goal is to satisfy non functional requirements.
Now that I can book a ticket.

- How to make sure booking it is low latency?
- How to ensure strongly consistent?
- How to make sure it can scale to scale numbers previously agreed upon?

## How are System Design Interviews Evaluated?

1. Problem Solving: Identify & prioritize the core challenges.
2. Solution Design: Create scalable architectures with balanced trade-offs.
3. Technical Excellence: Demonstrate deep knowledge and expertise
4. Communication: Clearly explain complex concepts to stakeholders.

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

# Conclusion
