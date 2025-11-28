## Graphs — study plan (easy → hard)

This collection is organized to teach graph fundamentals and then build toward
advanced algorithms and problem patterns. Each phase focuses on a small set of core skills you should practice until comfortable.

How to use this list

- Do the problems in the phase order shown. For each problem, force yourself to answer: how is the graph represented?
  Is this an implicit graph?
  Is BFS/DFS/topo/UF/MST/shortest-path more appropriate?
- For each phase, implement both recursive and iterative versions when possible (DFS/BFS).
  Try at least one alternate approach (e.g., BFS vs DP or UF vs DFS) to build intuition.

## ✅ Phase 1 — Fundamentals (representations, BFS, DFS, connectivity)

Goal: learn adjacency lists/matrices, BFS and DFS traversals, connected components, and implicit graphs (grids/word-ladders).

- 200. Number of Islands — grid DFS/BFS, connected components
       [https://leetcode.com/problems/number-of-islands](https://leetcode.com/problems/number-of-islands)

- 127. Word Ladder — BFS on implicit graph (shortest path in word graph)
       [https://leetcode.com/problems/word-ladder](https://leetcode.com/problems/word-ladder)

- 133. Clone Graph — adjacency list, BFS/DFS copy
       [https://leetcode.com/problems/clone-graph](https://leetcode.com/problems/clone-graph)

- 547. Number of Provinces — connected components / Union-Find alternative
       [https://leetcode.com/problems/number-of-provinces](https://leetcode.com/problems/number-of-provinces)

- 332. Reconstruct Itinerary — graph traversal + ordering (Eulerian path taste)
       [https://leetcode.com/problems/reconstruct-itinerary](https://leetcode.com/problems/reconstruct-itinerary)

---

## ✅ Phase 2 — Cycle detection & Topological ordering

Goal: detect cycles, produce valid orderings, and learn how to apply topological sort and Kahn's algorithm vs DFS-based ordering.

- 207. Course Schedule — detect cycles in directed graph (DFS / Kahn)
       [https://leetcode.com/problems/course-schedule](https://leetcode.com/problems/course-schedule)

- 210. Course Schedule II — produce a topological ordering
       [https://leetcode.com/problems/course-schedule-ii](https://leetcode.com/problems/course-schedule-ii)

- 446. Arithmetic Slices II? (optional) — examples of DP on DAGs (skip if unfamiliar)

---

## ✅ Phase 3 — Single-source shortest paths & weighted graphs

Goal: learn Dijkstra (priority queue), Bellman-Ford ideas, and when BFS variants suffice (unit weights).

- 743. Network Delay Time — classic Dijkstra application (shortest paths on directed weighted graph)
       [https://leetcode.com/problems/network-delay-time](https://leetcode.com/problems/network-delay-time)

- 787. Cheapest Flights Within K Stops — layered-BFS / Bellman-Ford style / DP on edges
       [https://leetcode.com/problems/cheapest-flights-within-k-stops](https://leetcode.com/problems/cheapest-flights-within-k-stops)

- 515? (optional) — shortest path variations; try Leetcode tags for practice

---

## ✅ Phase 4 — Union-Find and Minimum Spanning Trees

Goal: use Union-Find for connectivity/cycle problems and Prim/Kruskal for MST problems.

- 684. Redundant Connection — detect cycle with Union-Find
       [https://leetcode.com/problems/redundant-connection](https://leetcode.com/problems/redundant-connection)

- 1135. Connecting Cities With Minimum Cost — straightforward MST (Kruskal)
        [https://leetcode.com/problems/connecting-cities-with-minimum-cost](https://leetcode.com/problems/connecting-cities-with-minimum-cost)

- 1584. Min Cost to Connect All Points — MST variants and geometry/edges
        [https://leetcode.com/problems/min-cost-to-connect-all-points](https://leetcode.com/problems/min-cost-to-connect-all-points)

---

## ✅ Phase 5 — Multi-source BFS, grid-graph patterns, and advanced traversals

Goal: learn multi-source BFS, layered BFS, and how to transform grid problems into graph problems.

- 542. 01 Matrix — multi-source BFS (distance from many sources)
       [https://leetcode.com/problems/01-matrix](https://leetcode.com/problems/01-matrix)

- 417. Pacific Atlantic Water Flow — multi-source BFS/DFS from borders
       [https://leetcode.com/problems/pacific-atlantic-water-flow](https://leetcode.com/problems/pacific-atlantic-water-flow)

- 127. Word Ladder II (all shortest paths) — reconstructing multiple shortest paths
       [https://leetcode.com/problems/word-ladder-ii](https://leetcode.com/problems/word-ladder-ii)

---

## ✅ Phase 6 — Critical edges / bridges / articulation points / SCCs

Goal: learn Tarjan/Kosaraju's algorithms for SCCs and bridges, understand low-link values and their proofs.

- 1192. Critical Connections in a Network (bridges via Tarjan)
        [https://leetcode.com/problems/critical-connections-in-a-network](https://leetcode.com/problems/critical-connections-in-a-network)

- (Study) Tarjan's SCC / Kosaraju — apply to problems requiring SCC condensation (search LeetCode for SCC examples)

---

## ✅ Phase 7 — State-space / bitmask DP on graphs (traveling subsets)

Goal: solve small-N exponential problems (TSP-like) with DP over subsets and graph distances.

- 847. Shortest Path Visiting All Nodes — bitmask DP on graph (small N)
       [https://leetcode.com/problems/shortest-path-visiting-all-nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes)

---

## ✅ Phase 8 — Advanced topics (flows, Eulerian paths, specialty problems)

Goal: sample advanced techniques: max-flow/min-cut, Eulerian trails, and problem-specific tricks.

- 332. Reconstruct Itinerary (Eulerian path / hierholzer) — already listed but good to revisit with Eulerian focus
       [https://leetcode.com/problems/reconstruct-itinerary](https://leetcode.com/problems/reconstruct-itinerary)

- (Study) Max flow / Min cut: look for LeetCode graph problems tagged "max-flow" for practice (Dinic / Edmonds-Karp)

---

Notes and study tips

- Sketch graphs on paper. Label nodes/edges and try small examples. For grid problems, explicitly map cells→nodes and neighbors.
- For shortest paths, practice both Dijkstra and the relaxation idea (Bellman-Ford) so you can choose between them quickly.
- For UF vs DFS: use DFS when you need to traverse; use UF when you repeatedly merge components or need dynamic connectivity.
- Implement Tarjan and Kosaraju once from scratch — the proofs make many graph properties intuitive.

If you'd like, I can:

- Add links from each phase back to problems in your `leetcode/` repo (if you have solution files).
- Produce a 6–8 week study calendar mapping problems to days and difficulty targets.
