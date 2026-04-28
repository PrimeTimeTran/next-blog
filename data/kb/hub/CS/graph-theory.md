# Graph Theory Hub

## Purpose

This hub organizes the core concepts, representations, and problem-solving patterns related to graphs in algorithms and data structures. Graphs model relationships between entities and are foundational for many real-world and interview problems.

---

## Core Idea

A graph is a set of nodes (vertices) connected by edges.

Graphs are used to represent:

- Networks (social, computer, transportation)
- Dependencies (tasks, builds)
- Relationships (connections, links)

---

## Graph Representations

- [[Adjacency List]] — most common, space-efficient representation
- [[Adjacency Matrix]] — matrix-based representation for dense graphs
- [[Edge List]] — simple list of edges

---

## Graph Types

- Directed Graph — edges have direction
- Undirected Graph — bidirectional edges
- Weighted Graph — edges have weights/costs
- Unweighted Graph — all edges equal
- Cyclic Graph — contains cycles
- Acyclic Graph — no cycles (e.g. DAG)

---

## Core Algorithms

### Traversal

- [[BFS]] — breadth-first search (level by level)
- [[DFS]] — depth-first search (deep exploration)

### Shortest Path

- [[Dijkstra's Algorithm]] — shortest path with non-negative weights
- [[Bellman-Ford Algorithm]] — handles negative weights
- [[Floyd-Warshall Algorithm]] — all-pairs shortest paths

### Connectivity

- [[Union Find]] — disjoint set structure for components
- Connected Components — grouping reachable nodes

### Ordering / Dependencies

- Topological Sort — ordering nodes in DAGs

---

## Common Problem Patterns

- Path finding problems
- Connected components
- Cycle detection
- Grid traversal (2D graphs)
- Dependency resolution
- Network flow-style reasoning (advanced)

---

## Grid as Graph Insight

Many 2D problems are graphs in disguise:

- Each cell = node
- Each direction (up/down/left/right) = edge

Common use cases:

- Islands problems
- Maze solving
- Shortest path in grids

---

## Complexity (High Level)

- Traversal (BFS/DFS): O(V + E)
- Dijkstra: O((V + E) log V)
- Union Find: near O(1) amortized (inverse Ackermann)

See: [[Complexity Analysis Hub]]

---

## When to Use Graph Thinking

Use graph modeling when:

- Relationships matter more than values
- You need to explore connections
- Problems involve paths, networks, or dependencies

---

## Entry Path (Learning Order)

1. [[Graph Representation]]
2. [[BFS]]
3. [[DFS]]
4. Connected Components
5. Cycle Detection
6. Shortest Path Algorithms
7. Topological Sort
8. Union Find

---

# Related

- [[Data Structures Hub]]
- [[Algorithms Hub]]
- [[Dynamic Programming (DP)]]

---

## Common Mistakes

- Confusing DFS recursion stack with BFS queue behavior
- Forgetting visited tracking
- Misinterpreting directed vs undirected edges
- Treating grid problems as arrays instead of graphs

---
