# Data Structures & Algorithms Hub

## Purpose

Comprehensive guide to data structures and algorithms. This hub separates the "what" (data structures) from the "how" (algorithms), providing a clear foundation for computational problem-solving.

---

## Foundations

Essential concepts that form the basis of all data structures and algorithms.

- [[Mathematical Foundations]] — modular arithmetic, logarithms, combinatorics
- [[complexity-analysis|Complexity Analysis]] — [[big-o]], [[big-omega]], Theta notation
- [[asymptotic-notation|Asymptotic Notation]] — analyzing algorithm efficiency and scalability
  - [[Time Complexity]] — measuring execution time as input grows
  - [[Space Complexity]] — measuring memory usage as input grows
- [[object-oriented-programming-OOP|Object Oriented Programming (OOP)]] — defining functions, signatures, classes, etc.
- [[recursion]] — functions that call themselves, base cases, recursive thinking
- [[Bit Manipulation]] — bitwise operations, powers of 2, binary representation
- [[whiteboarding-solution-delivery-framework|Problem Solving Framework]] — breaking down problems, edge cases, constraints
  - [[problem-recognition|Pattern: Problem Recognition]]

---

# 📊 Data Structures

Core containers and organizations for storing and accessing data.

## Basic Structures

Fundamental building blocks used in most programs.

- [[Array]] — ordered, contiguous collection of elements
- [[Linked List]] — nodes connected by pointers
- [[Stack]] — LIFO (last in, first out)
- [[Queue]] — FIFO (first in, first out)

## Advanced Structures

Specialized structures for specific use cases and performance requirements.

- [[HashMap]] — key-value storage with fast lookup
- [[HashSet]] — unique elements with fast membership checks
- [[Tree]] — general hierarchical structure
  - [[binary-search-tree]] — ordered tree with O(log n) operations
- [[Heap]] — priority queue implementation
- [[Graph]] — nodes connected by edges
- [[Trie]] — prefix tree for strings

## Specialized Structures

Domain-specific structures for advanced applications.

- Tree
  - [[AVL Tree]] — self-balancing BST
  - [[Red-Black Tree]] — self-balancing BST with coloring rules
  - [[B-Tree]] — multi-way search tree for disk-based storage
  - [[Segment Tree]] — range query tree structure
  - [[Fenwick Tree]] — binary indexed tree for prefix sums
  - [[Suffix Tree]] — all suffixes of a string
  - [[KD-Tree]] — k-dimensional search tree
- [[atom/CS/dsa/algorithms/union-find|union-find]] — disjoint set tracking connectivity
- [[Bloom Filter]] — probabilistic set membership
- [[Skip List]] — probabilistic balanced search structure
- [[Suffix Array]] — sorted array of all suffixes
- [[Sparse Matrix]] — matrix with mostly zero values

---

# ⚙️ Algorithms

Techniques and methods for solving computational problems.

## Searching & Sorting

Fundamental operations on data.

- [[binary-search|Binary Search]] — decision making process where we identify how to partition and maintain and invariant such that our target isn't discarded/boundaries respect limitations.
- [[atom/CS/dsa/categories/Sorting|Sorting]] — various sorting algorithms (quick, merge, heap, etc.)
- [[atom/CS/dsa/algorithm/backtracking|backtracking]] — systematic search with pruning
- [[atom/CS/dsa/algorithm/union-find|union-find]]

## Graph Algorithms

Traversal and optimization on graph structures.

- [[BFS]] — breadth-first search traversal
- [[DFS]] — depth-first search traversal
- [[atom/CS/dsa/algorithm/dijkstras|Dijkstras]] — shortest path in weighted graphs
- [[Bellman-Ford]] — shortest path with negative weights
- [[Floyd-Warshall]] — all-pairs shortest paths
- [[Kruskal's]] — minimum spanning tree
- [[Prim's]] — minimum spanning tree
- [[Topological Sort]] — ordering with dependencies

## Dynamic Programming

Optimization through subproblem decomposition.

- [[atom/CS/dsa/algorithm/DP|Dynamic Programming (DP)]] — general DP principles
- [[Knapsack]] — resource allocation problems
- [[Longest Common Subsequence]] — string comparison
- [[Edit Distance]] — string transformation cost

## Advanced Techniques

Complex problem-solving strategies.

- [[Greedy]] — locally optimal choices
- [[Divide and Conquer]] — recursive problem breakdown
- [[atom/CS/dsa/algorithm/sliding-window|sliding-window]] — efficient range queries
- [[two-pointer]] — simultaneous traversal techniques

---

## Choosing the Right Tool

### For Data Storage

- **Ordered access** → Array, Linked List
- **Fast lookup** → HashMap, HashSet
- **Hierarchical data** → [[tree|Tree]], Trie
- **Relationships** → Graph, [[atom/CS/dsa/algorithm/union-find]]
- **Priority operations** → Heap
- **Range queries** → Segment Tree, Fenwick Tree

### For Problem Solving

- **Optimization** → Dynamic Programming, Greedy
- **Search problems** → BFS, DFS, [[backtracking|Backtracking]]
- **Path finding** → Dijkstra's, A\*
- **Sorting needs** → Quick Sort, Merge Sort, Heap Sort

---

## Implementation Notes

- **Language support** — Arrays, HashMaps built-in; Trees, Graphs often custom
- **Performance trade-offs** — Memory vs speed, simplicity vs optimization
- **Practice focus** — LeetCode problems map to these structures/algorithms
- **Real-world usage** — Most applications use 20% of structures for 80% of problems

## 🌐 Reference

- [Every Data Structure Explained in 20 Minutes!](https://www.youtube.com/watch?v=vVL6NFzr0Rg)
