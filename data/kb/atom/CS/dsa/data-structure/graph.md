# Graph — Atom

## Core Idea

A graph is an abstract data structure consisting of vertices (nodes) connected by edges, used to model relationships and connections between entities.

---

## Key Components

### Vertices (Nodes)

- Represent entities or points in the graph
- Can store data (e.g., city names, user IDs)
- Identified by unique labels or indices

### Edges

- Represent relationships or connections between vertices
- Can be directed (one-way) or undirected (bidirectional)
- May have weights/costs associated with them

---

## Basic Structure

```python
# Simple graph representation
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A'],
    'D': ['B']
}
```

---

## Graph Types

### Directed Graph (Digraph)

- Edges have direction (arrows)
- Relationships are one-way
- Example: Twitter follows, web links

### Undirected Graph

- Edges are bidirectional
- Relationships are mutual
- Example: Facebook friendships, road networks

### Weighted Graph

- Edges have associated costs/weights
- Used for distance, time, or capacity
- Example: Maps with distances, network bandwidth

### Unweighted Graph

- All edges are equal
- Simple presence/absence of connection
- Example: Social network connections

---

## Common Representations

### Adjacency List

- Most space-efficient for sparse graphs
- List of neighbors for each vertex
- Time: O(1) to find neighbors, O(V + E) space

### Adjacency Matrix

- 2D array of vertices
- Fast edge lookups: O(1)
- Space: O(V²), good for dense graphs

### Edge List

- Simple list of (vertex1, vertex2) pairs
- Space-efficient: O(E)
- Slower for queries

---

## Key Properties

### Degree

- Number of edges connected to a vertex
- In-degree: edges pointing to vertex (directed)
- Out-degree: edges pointing from vertex (directed)

### Path

- Sequence of vertices connected by edges
- Length: number of edges in path

### Cycle

- Path that starts and ends at same vertex
- Contains at least one edge

### Connected Component

- Group of vertices reachable from each other
- In undirected graphs: connected components
- In directed graphs: strongly/weakly connected

---

## When to Use Graphs

- Modeling networks (social, computer, transportation)
- Representing dependencies (task scheduling, build systems)
- Finding connections (shortest path, recommendations)
- Analyzing relationships (clustering, centrality)

---

## Common Operations

- Add/remove vertices and edges
- Check adjacency between vertices
- Traverse the graph (BFS/DFS)
- Find paths between vertices
- Calculate graph properties (degrees, components)

---

## Implementation Notes

- Choose representation based on graph density
- Track visited nodes during traversal
- Handle disconnected graphs
- Consider edge cases (empty graph, single vertex)

---

# Related Concepts

- [[Tree]] — acyclic connected graph
- [[BFS]] — breadth-first traversal
- [[DFS]] — depth-first traversal
- [[Graph Theory Hub]] — overview of graph algorithms
