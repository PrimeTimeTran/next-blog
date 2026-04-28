---
tags:
  - dsa
---

# Queue as Ordered Processing Boundary (FIFO)

**Core Idea**
A queue is a data structure that enforces **first-in, first-out (FIFO)** order, ensuring elements are processed in the exact order they enter.

---

## Invariant (What You Maintain)

> **Elements are processed in arrival order**

- Front → next element to process
- Back → newest element added
- No element can “skip ahead”

---

## Decision Process

At each step:

1. **Enqueue (push back)** → add new element
2. **Dequeue (pop front)** → process oldest element

Each decision:

- Preserves strict ordering
- Ensures fairness and consistency

---

## Why It Works

Because of FIFO ordering:

- Earlier elements are always handled first
- Later elements must **wait their turn**
- This naturally models **sequential progression over time**

---

## Boundary Interpretation

A queue represents a **moving boundary between processed and unprocessed elements**:

- Front → boundary where processing happens
- Back → boundary where new work enters

At any moment:

> The queue contains the **active set of pending work**

---

## Template

```python
from collections import deque

queue = deque()

# enqueue
queue.append(x)

# dequeue
x = queue.popleft()
```

---

## Key Insight

A queue is fundamentally:

> **A structure that guarantees ordered progression through a set of tasks**

---

## Relationship to Algorithms

- In BFS:

  - Queue = **current frontier**
  - Ensures level-by-level expansion

- In scheduling:
  - Queue = **pending tasks in order**

---

## Common Use Cases

- Breadth-first search (BFS)
- Task scheduling
- Buffering (I/O, streaming)
- Simulation of real-world lines

---

## Mental Model

Think:

- “Who has been waiting the longest?”
- “What must be processed next in order?”

Not:

- “Pick any element” (that breaks FIFO)

---

## Complexity

- Enqueue: ( \Theta(1) )
- Dequeue: ( \Theta(1) )

---

## One-Line Intuition

> Queue = **process things in the exact order they arrive**
