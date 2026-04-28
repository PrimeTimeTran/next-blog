---
tags:
  - algorithms
  - graph-theory
  - shortest-path
  - cs
---

# 📘 Dijkstra’s Algorithm

Dijkstra’s Algorithm finds the **shortest path from a source node to all other nodes** in a graph with **non-negative edge weights**.

---

# 🧠 Core Idea

> Always expand the node with the currently known **smallest distance**.

It builds shortest paths **greedily**, ensuring each step is optimal.

---

# 📊 When to Use

Use Dijkstra when:

- Graph is **weighted**
- Edge weights are **non-negative**
- You need **shortest paths from one source**

---

# 📈 Algorithm Steps

1. Initialize distances:

   - Source = 0
   - All others = ∞

2. Use a **priority queue (min-heap)**

3. Repeat:
   - Extract node with smallest distance
   - For each neighbor:
     - Update distance if a shorter path is found

---

# 🧮 Relaxation Step

For edge \( (u, v) \) with weight \( w \):

$$
\text{if } dist[v] > dist[u] + w:
$$

$$
\quad dist[v] = dist[u] + w
$$

---

# 🧠 Intuition

Think of it like:

> A wave expanding outward from the source, always choosing the closest unexplored point.

---

# 📊 Example

Graph:

```

A --1--> B --2--> C
\               ^
--4----------/

```

- Start at A:
  - B = 1
  - C = 4
- Then process B:
  - C = min(4, 1+2) = 3

Shortest path A → C = 3

---

# ⏱ Complexity

- Using min-heap:
  $$
  O((V + E)\log V)
  $$

---

# ⚠️ Limitations

- ❌ Does NOT work with negative weights
- ❌ Cannot detect negative cycles

Use [[bellman-ford|Bellman-Ford]] instead for those cases.

---

# 🔗 Related Concepts

- [[graph-theory|Graph Theory]]
- [[breadth-first-search|Breadth-First Search]] (unweighted graphs)
- [[bellman-ford|Bellman-Ford]] (handles negative weights)
- [[priority-queue|Priority Queue]]

---

# 📌 Key Insight

> Once a node is visited (finalized), its shortest path is guaranteed.

---

# 🧭 Mental Model

> Greedily lock in the closest node, then expand outward.

---

# 📌 Summary

- Finds shortest paths from a source
- Requires non-negative weights
- Uses greedy + priority queue
- Core algorithm in graph optimization
