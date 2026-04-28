---
tags: dsa
---

# Depth-First Search (DFS) as Path Commitment

**Core Idea**  
DFS is a process of **committing to a path as far as possible before backtracking**, exploring depth before breadth.

---

## Invariant (What You Maintain)

> **At any moment, you are exploring a single active path from the start node**

- The recursion stack (or explicit stack) = **current path**
- Visited nodes = **already explored paths**
- Unvisited nodes = **unexplored branches**

---

## Decision Process

At each step:

1. Move to an unvisited neighbor
2. Continue deeper (extend current path)
3. If no unvisited neighbors → **backtrack**

Each decision:

- Chooses **one branch to fully explore**
- Defers all other choices until later

---

## Why It Works

DFS systematically explores all paths because:

- Every branch is eventually taken
- Backtracking ensures **no path is missed**
- The stack preserves where to return

---

## Boundary Interpretation

DFS maintains a **moving boundary along a single path**:

- Forward step → expand deeper into graph
- Backtrack → retreat and explore alternate branch

At any point:

> The boundary is the **edge of the current path being explored**

---

## Template (Recursive)

```id="3k9x2p"
visited = set()

def dfs(node):
    if node in visited:
        return

    visited.add(node)

    for neighbor in neighbors(node):
        dfs(neighbor)
```

---

## Key Insight

DFS is fundamentally:

> **Explore one possibility fully before considering alternatives**

---

## Stack Interpretation

- Implicit (recursion) or explicit (manual stack)
- Stack = **history of decisions**
- Backtracking = **undo last decision**

---

## Common Use Cases

- Detecting cycles
- Topological sorting
- Finding connected components
- Exploring all paths / backtracking problems

---

## Mental Model

Think:

- “Go as deep as possible”
- “If stuck, rewind and try another branch”

Not:

- “Explore evenly” (that’s BFS)

---

## Complexity

- Time: ( \Theta(V + E) )
- Space: ( \Theta(V) ) (due to recursion/stack)

---

## One-Line Intuition

> DFS = **commit to a path, then backtrack when it fails**

# Related

- [[dsa|DSA]]
- [[bfs|BFS]]
