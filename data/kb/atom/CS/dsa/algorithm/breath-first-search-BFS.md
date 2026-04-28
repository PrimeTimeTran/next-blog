---
tags: dsa
---

# Breadth-First Search (BFS) as Layered Exploration

**Core Idea**
BFS is a process of **expanding a boundary outward level by level**, ensuring that all nodes at distance ( d ) are explored before any at distance ( d+1 ).

---

## Invariant (What You Maintain)

> **All nodes in the queue form the current “frontier” of exploration**

- Nodes already processed → fully explored
- Nodes in queue → next boundary to expand
- Unvisited nodes → outside current boundary

---

## Decision Process

At each step:

1. Remove a node from the front of the queue
2. Visit its neighbors
3. Add only **unvisited neighbors** to the queue

Each decision:

- **Expands the boundary outward**
- **Avoids revisiting nodes**
- Maintains correct layering

---

## Why It Works

Because BFS explores in order of distance:

- First time you reach a node = **shortest path (unweighted graph)**
- The queue enforces **FIFO order → layer-by-layer traversal**

---

## Boundary Interpretation

Think of BFS as a **wave expanding outward**:

- Start: source node
- Step 1: all nodes distance 1
- Step 2: all nodes distance 2
- …

At any moment:

> The queue represents the **edge between explored and unexplored regions**

---

## Template (Queue-Based)

```id="sbrr9r"
from collections import deque

queue = deque([start])
visited = set([start])

while queue:
    node = queue.popleft()

    for neighbor in neighbors(node):
        if neighbor not in visited:
            visited.add(neighbor)
            queue.append(neighbor)
```

---

## Key Insight

BFS is fundamentally:

> **Controlled expansion of a frontier while preserving distance order**

---

## Common Use Cases

- Shortest path (unweighted graphs)
- Level-order traversal (trees)
- Finding connected components
- Multi-source expansion problems

---

## Mental Model

Think:

- “What is the current boundary?”
- “What new nodes become reachable next?”

Not:

- “Go as deep as possible” (that’s DFS)

---

## Complexity

- Time: ( \Theta(V + E) )
- Space: ( \Theta(V) )

---

## One-Line Intuition

> BFS = **expand evenly outward, never skipping a closer node**

# Related

- [[dsa|DSA]]
- [[dfs|DFS]]
