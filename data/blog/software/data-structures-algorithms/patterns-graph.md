---
draft: false
date: '2020-04-24'
title: 'Data Structures & Algorithms: Patterns of Graph Problems'
summary: 'Patterns often used to solve Graph problems'
tags: ['data structures algorithms', 'python']
---

# Introduction

A deep dive on algorithms pertinent to graph problems within the realm of data structures & algorithms.

<TOCInline toc={props.toc} exclude="Overview" toHeading={4} />

## **♦️ BFS**

**Shortest path in unweighted graphs, level-order traversal, finding the minimum number of steps.**

Here are the Key Features sections for the requested algorithms:

- **Key Features:**

  - Explores nodes level by level (breadth-first).
  - Guarantees the shortest path in unweighted graphs.
  - Uses a queue for traversal.
  - Commonly used for:
    - Finding the shortest path in unweighted graphs.
    - Level-order traversal of trees.
    - Solving problems involving minimum steps or distances.

- **LeetCode Problems:**
  - [127. Word Ladder](https://leetcode.com/problems/word-ladder) — Find the shortest transformation sequence from `beginWord` to `endWord`.
  - [207. Course Schedule](https://leetcode.com/problems/course-schedule) — Determine if you can finish all courses given prerequisites.
  - [994. Rotting Oranges](https://leetcode.com/problems/rotting-oranges) — Find the minimum time required for all oranges to rot.
  - [1091. Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix) — Find the shortest path from the top-left corner to the bottom-right in a binary grid.

---

## **♦️ DFS**

**Detecting cycles, connected components, topological sorting.**

- **Key Features:**

  - Explores as far as possible along each branch before backtracking (depth-first).
  - Uses a stack (explicit or recursion) for traversal.
  - Commonly used for:
    - Detecting cycles in graphs.
    - Finding connected components.
    - Topological sorting in Directed Acyclic Graphs (DAGs).
    - Solving maze and path finding problems.

- **LeetCode Problems:**
  - [200. Number of Islands](https://leetcode.com/problems/number-of-islands) — Count the number of islands (connected components) in a grid.
  - [210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii) — Return the ordering of courses to finish all courses.
  - [417. Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow) — Find cells that can flow to both the Pacific and Atlantic oceans.
  - [785. Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite) — Check if a graph is bipartite using DFS.

---

## **♦️ Priority Queue**

**Dijkstra’s algorithm for shortest path in weighted graphs, Prim’s algorithm for Minimum Spanning Tree (MST).**

- **Key Features:**

  - A data structure that allows retrieval of the smallest (or largest) element efficiently.
  - Used in graph algorithms like:
    - Dijkstra's
    - Prim's
  - Typically implemented using a min-heap or max-heap.

- **LeetCode Problems:**
  - [743. Network Delay Time](https://leetcode.com/problems/network-delay-time) — Find the time it takes for all nodes to receive a signal from a starting node.
  - [787. Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops) — Find the cheapest flight path with at most K stops.
  - [1514. Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability) — Find the path with the highest probability.
  - [1631. Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort) — Find the minimum effort path in a grid.

---

### **🔸 Dijkstra's Algorithm**

Dijkstra's algorithm is used to find the **shortest path** from a source node to all other nodes in a **weighted, non-negative graph**. It uses a **priority queue (min-heap)** to always extend the path with the lowest cost first. It is optimal for graphs with non-negative weights but does not handle negative cycles.

- **Key Features:**

  - Finds the shortest path from a source node to all other nodes in a weighted graph.
  - Works only with non-negative edge weights.
  - Uses a priority queue (min-heap) to extend the path with the lowest cost first.
  - Inefficient for graphs with negative weights (use Bellman-Ford instead).
  - Commonly used for:
    - Network routing.
    - Pathfinding in weighted graphs.

- **LeetCode Problems:**

  - [743. Network Delay Time](https://leetcode.com/problems/network-delay-time/) - Find the time it takes for all nodes to receive a signal from a starting node.
  - [787. Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) - Find the cheapest flight path with at most K stops.
  - [1514. Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/) - Find the path with the highest probability.
  - [1631. Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/) - Find the minimum effort path in a grid.
  - [1976. Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/) - Count the number of ways to arrive at a destination with the minimum cost.

---

#### **🔷 A\* Search Algorithm**

The **A\* Search Algorithm** is a heuristic-based algorithm used for pathfinding and graph traversal. It is widely used in AI and game development.

- **Key Features:**

  - Combines the benefits of Dijkstra's algorithm and greedy best-first search.
  - Uses a heuristic function to guide the search.

- **LeetCode Problems:**
  - [127. Word Ladder](https://leetcode.com/problems/word-ladder/)
  - [505. The Maze II](https://leetcode.com/problems/the-maze-ii/)
  - [675. Cut Off Trees for Golf Event](https://leetcode.com/problems/cut-off-trees-for-golf-event/)
  - [1091. Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/)
  - [1631. Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/)

---

### **🔸 Prim's Algorithm**

Prim's algorithm is used to find the **Minimum Spanning Tree (MST)** of a connected, weighted, and undirected graph. It builds the MST by **greedily choosing the minimum edge** that connects a vertex in the tree to a vertex outside the tree, using a priority queue for efficiency.

- **Key Features:**

  - Used to find the Minimum Spanning Tree (MST) of a connected, weighted, and undirected graph.
  - Greedily chooses the minimum edge that connects a vertex in the tree to a vertex outside the tree.
  - Uses a priority queue (min-heap) for efficiency.
  - Commonly used for:
    - Network design (e.g., laying cables or pipelines).
    - Optimizing resource usage in connected systems.

- **LeetCode Problems:**

  - [261. Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/) - Check if the graph is a valid tree.
  - [1135. Connecting Cities With Minimum Cost](https://leetcode.com/problems/connecting-cities-with-minimum-cost/) - Find the minimum cost to connect all cities.
  - [1168. Optimize Water Distribution in a Village](https://leetcode.com/problems/optimize-water-distribution-in-a-village/) - Minimize the cost of supplying water to all houses.
  - [1584. Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) - Connect all points with the minimum cost.
  - [1631. Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/) (Can be solved with Prim’s as well as Dijkstra's).

---

## **♦️ Union-Find**

**Finding connected components, cycle detection in undirected graphs, Kruskal’s MST.**

- **Key Features:**

  - A data structure used to efficiently manage and merge disjoint sets.
  - Supports two main operations:
  - Find: Determines which set a particular element belongs to.
  - Union: Merges two sets into one.
  - Commonly used for:
    - Detecting cycles in undirected graphs.
    - Finding connected components.
    - Supporting Kruskal’s algorithm for Minimum Spanning Tree (MST).

- **LeetCode Problems:**

  - [261. Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/) — Determine if the graph is a valid tree.
  - [323. Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) — Count the number of connected components.
  - [684. Redundant Connection](https://leetcode.com/problems/redundant-connection/) — Find the edge that, when removed, will make the graph a tree.
  - [947. Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/) — Maximize the number of stones removed by grouping in rows or columns.

---

### **🔸 Kruskal's Algorithm**

Kruskal's algorithm is also used to find the **Minimum Spanning Tree (MST)** of a graph. It works by sorting all edges by weight and adding them one by one to the MST, ensuring that no cycles are formed (using **Union-Find** for cycle detection).

- **Key Features:**

  - Used to find the Minimum Spanning Tree (MST) of a graph.
  - Works by:
  - Sorting all edges by weight.
  - Adding edges one by one to the MST, ensuring no cycles are formed (using Union-Find for cycle detection).
  - Commonly used for:
    - Network design (e.g., laying cables or pipelines).
    - Optimizing resource usage in connected systems.

- **LeetCode Problems:**

  - [684. Redundant Connection](https://leetcode.com/problems/redundant-connection/) - Find the edge that, when removed, will make the graph a tree.
  - [1135. Connecting Cities With Minimum Cost](https://leetcode.com/problems/connecting-cities-with-minimum-cost/) - Find the minimum cost to connect all cities. (Also solvable with Prim's)
  - [1168. Optimize Water Distribution in a Village](https://leetcode.com/problems/optimize-water-distribution-in-a-village/) - Find the minimum cost for water distribution.
  - [1202. Smallest String With Swaps](https://leetcode.com/problems/smallest-string-with-swaps/) - Use Union-Find to group and sort substrings.
  - [1584. Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) - Connect all points with minimum cost. (Can be solved with either Kruskal's or Prim's)

---

## **♦️ Topological Sort**

Topological Sort is used to **order nodes in a Directed Acyclic Graph (DAG)** such that for every directed edge `U -> V`, node `U` appears before node `V` in the ordering. It's particularly useful for **task scheduling** and **dependency resolution**.

- **Key Features:**

  - Orders nodes in a Directed Acyclic Graph (DAG) such that for every directed edge U -> V, node U appears before node V in the ordering.
  - Commonly used for:
    - Task scheduling.
    - Dependency resolution.
    - Analyzing precedence relationships in workflows.

- **LeetCode Problems:**

  - [207. Course Schedule](https://leetcode.com/problems/course-schedule/) - Determine if you can finish all courses given prerequisites.
  - [210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) - Find an order in which you can take the courses.
  - [310. Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/) - Find the roots of minimum height trees.
  - [329. Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) - Longest path in a matrix can be viewed as a DAG.
  - [802. Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/) - Find nodes that do not lead to cycles.

---

## **♦️ Bellman-Ford Algorithm**

The **Bellman-Ford Algorithm** is used to find the shortest path from a single source to all other vertices in a graph. It works with graphs that have negative weight edges but cannot handle negative weight cycles.

- **Key Features:**

  - Handles negative weights.
  - Slower than Dijkstra's algorithm for graphs without negative weights.

- **LeetCode Problems:**
  - [399. Evaluate Division](https://leetcode.com/problems/evaluate-division/)
  - [743. Network Delay Time](https://leetcode.com/problems/network-delay-time/)
  - [787. Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
  - [1631. Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/)
  - [1928. Minimum Cost to Reach Destination in Time](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/)

---

## **♦️ Floyd-Warshall Algorithm**

The **Floyd-Warshall Algorithm** is used to find the shortest paths between all pairs of vertices in a graph. It works for both directed and undirected graphs and handles negative weights but not negative weight cycles.

- **Key Features:**

  - Solves the all-pairs shortest path problem.
  - Uses dynamic programming.

- **LeetCode Problems:**
  - [847. Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/)
  - [1129. Shortest Path with Alternating Colors](https://leetcode.com/problems/shortest-path-with-alternating-colors/)
  - [1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/)
  - [1631. Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/)
  - [1976. Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/)

---

## **♦️ Tarjan's Algorithm**

The **Tarjan's Algorithm** is used to find strongly connected components (SCCs) in a directed graph. It uses depth-first search (DFS) and is highly efficient.

- **Key Features:**

  - Finds SCCs in O(V + E) time.
  - Useful for analyzing graph connectivity.

- **LeetCode Problems:**
  - [207. Course Schedule](https://leetcode.com/problems/course-schedule/)
  - [310. Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/)
  - [323. Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/)
  - [802. Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/)
  - [1192. Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)

---

## **♦️ Kosaraju's Algorithm**

The **Kosaraju's Algorithm** is another method to find SCCs in a directed graph. It involves two passes of DFS: one on the original graph and one on the transposed graph.

- **Key Features:**

  - Finds SCCs in O(V + E) time.
  - Simpler to implement conceptually compared to Tarjan's.

- **LeetCode Problems:**
  - [207. Course Schedule](https://leetcode.com/problems/course-schedule/)
  - [210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)
  - [310. Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/)
  - [802. Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/)
  - [1192. Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)

---

## **♦️ Edmonds-Karp Algorithm**

The **Edmonds-Karp Algorithm** is an implementation of the Ford-Fulkerson method for finding the maximum flow in a flow network. It uses BFS to find augmenting paths.

- **Key Features:**

  - Solves the maximum flow problem.
  - Runs in O(VE²) time.

- **LeetCode Problems:**
  - [207. Course Schedule](https://leetcode.com/problems/course-schedule/)
  - [210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)
  - [310. Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/)
  - [802. Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/)
  - [1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/)

---

## **♦️ Hopcroft-Karp Algorithm**

The **Hopcroft-Karp Algorithm** is used to find the maximum matching in a bipartite graph. It alternates between BFS and DFS to find augmenting paths.

- **Key Features:**

  - Solves the maximum bipartite matching problem.
  - Runs in O(E√V) time.

- **LeetCode Problems:**
  - [785. Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/)
  - [886. Possible Bipartition](https://leetcode.com/problems/possible-bipartition/)
  - [947. Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/)
  - [1020. Number of Enclaves](https://leetcode.com/problems/number-of-enclaves/)
  - [1202. Smallest String With Swaps](https://leetcode.com/problems/smallest-string-with-swaps/)

---

## **♦️ Johnson's Algorithm**

The **Johnson's Algorithm** is used to find shortest paths between all pairs of vertices in a sparse graph with negative weights. It combines Bellman-Ford and Dijkstra's algorithms.

- **Key Features:**

  - Handles negative weights.
  - Efficient for sparse graphs.

- **LeetCode Problems:**
  - [743. Network Delay Time](https://leetcode.com/problems/network-delay-time/)
  - [787. Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
  - [1514. Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/)
  - [1631. Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/)
  - [1976. Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/)

---

# Conclusion

Mastery of these algorithms will develop your graph problem solving intuition substantially.
