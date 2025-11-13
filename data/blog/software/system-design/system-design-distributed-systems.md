---
draft: false
date: '2024-07-31'
title: 'System Design: Distributed Systems'
summary: 'A distributed system is a collection of independent computers that appear to the users as a single coherent system. The key goal is to achieve scalability, fault tolerance, and high availability while maintaining consistency and performance.'
tags: ['system design', 'gcp']
---

# Introduction

To build a distributed system, you need to understand and make trade-offs between:

- Scalability: How well the system handles increasing load. Use techniques like horizontal scaling, sharding, and load balancing.
- Availability: Ensure the system continues to function even when parts fail. Use redundancy, replication, and failover strategies.
- Consistency: Keep data synchronized across nodes. Apply techniques like consensus protocols (e.g., Raft, Paxos) and distributed transactions.
- Partition Tolerance: Handle network failures that split the system. According to the CAP theorem, a distributed system must sacrifice either consistency or availability in such scenarios.

Other important concepts include:

- Data partitioning and replication
- Service discovery
- Eventual consistency
- Distributed caching
- Rate limiting and backpressure
- Monitoring and observability

Building a distributed system involves designing with failure as a given, optimizing for communication over unreliable networks, and ensuring the system degrades gracefully under stress.

[Demo](https://system-design-distributed-service-890407456021.us-central1.run.app/increment?delay=1)
[Github](https://github.com/PrimeTimeTran/system_design_distributed_system)
