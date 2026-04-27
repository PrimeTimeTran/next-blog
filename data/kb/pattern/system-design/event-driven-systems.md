# Pattern: Event-Driven Systems

## Intent

Design systems where components communicate by producing and consuming events instead of direct synchronous calls, enabling loose coupling, scalability, and asynchronous processing.

---

## When this pattern applies

Use this pattern when:

- Multiple services need to react to the same change
- Work can be processed asynchronously
- You want to decouple producers from consumers
- You need high scalability or extensibility

Typical use cases:

- Order processing pipelines
- Notification systems
- Analytics/event tracking
- Microservices coordination
- Audit logging systems

---

## Core idea

> Instead of asking services directly for results, emit events that describe what happened, and let interested systems react independently.

---

## High-level flow

1. A **producer** performs an action
2. It emits an **event** (e.g., `OrderPlaced`)
3. An **event broker** distributes the event
4. Multiple **consumers** react independently

---

## Key components

### Producer

- Generates events
- Does not need to know consumers

### Event bus / broker

- Routes events to subscribers
- Examples: Kafka, RabbitMQ, SNS/SQS

### Consumers

- Independently process events
- Can scale and evolve separately

---

## Decision signals

Use event-driven systems when:

- You need to fan-out a single action to many services
- Latency can be eventual, not immediate
- You want to decouple system components
- Work can be processed independently

Avoid when:

- Strong synchronous consistency is required
- Debugging simplicity is more important than scalability
- System is small and overhead is not justified

---

## Tradeoffs

| Dimension   | Benefit                       | Cost                            |
| ----------- | ----------------------------- | ------------------------------- |
| Coupling    | Low coupling between services | Harder system reasoning         |
| Scalability | Easy horizontal scaling       | Infrastructure complexity       |
| Reliability | Fault isolation               | Event loss/delivery guarantees  |
| Consistency | Eventual consistency          | Harder debugging/state tracking |
| Flexibility | Easy to add consumers         | Hidden dependencies emerge      |

---

## Key mental model

> A system becomes a network of reactions to facts, not a chain of direct requests.

---

## Common failure modes

- “Event spaghetti” (too many hidden dependencies)
- Duplicate or out-of-order event handling
- Poor idempotency in consumers
- Overuse for simple synchronous workflows
- Debugging difficulty due to indirect flows

---

## Design heuristics

Prefer event-driven when:

- You need fan-out behavior (one event → many reactions)
- Work can be decoupled in time
- System needs to scale independently per component

Prefer synchronous APIs when:

- Immediate response is required
- Workflow is simple and linear
- Strong consistency is required

---

# Related patterns

- Pub/Sub architecture
- Message queues and streaming systems
- CQRS (Command Query Responsibility Segregation)
- Event sourcing
- Saga pattern (distributed workflows)
