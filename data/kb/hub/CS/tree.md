# Tree Hub

## Purpose

This hub organizes all core concepts related to tree data structures. Trees represent hierarchical relationships and are used in recursion, search, parsing, and many algorithmic problems.

---

## Core Idea

A tree is a hierarchical structure made of nodes connected by edges, with one root and no cycles.

Trees are used when:

- data has hierarchy
- problems involve recursion
- relationships branch outward

---

## Core Concepts

- [[Tree]] — basic definition of a tree structure
- [[Root Node]] — top-most node in a tree
- [[Parent Node]] — node that connects to children
- [[Child Node]] — nodes descending from a parent
- [[Leaf Node]] — node with no children
- [[Internal Node]] — node with at least one child

---

## Tree Types

- [[Binary Tree]] — each node has at most 2 children
- Binary Search Tree (BST) — ordered binary tree property
- Balanced Tree — height is kept logarithmic
- Complete Tree — all levels filled except possibly last
- Full Tree — every node has 0 or 2 children

---

## Traversal (Core Pattern)

See: [[Tree Traversal]]

- Preorder (Root → Left → Right)
- Inorder (Left → Root → Right)
- Postorder (Left → Right → Root)
- Level Order (BFS)

---

## Key Algorithms

- [[DFS]] — depth-first traversal (recursive tree exploration)
- [[BFS]] — level-by-level traversal
- Lowest Common Ancestor (LCA)
- Tree Height / Depth calculations
- Tree Serialization / Deserialization

---

## Tree as a Recursive Structure

Most tree problems reduce to recursion:

- process current node
- recurse left subtree
- recurse right subtree

This pattern appears in:

- traversal
- search
- aggregation problems

---

## Complexity

- Traversal: O(n)
- Space: O(h) recursion stack (h = height of tree)

See: [[Complexity Analysis Hub]]

---

## Grid / Graph Connection

Trees are a special case of graphs:

- connected
- acyclic
- n nodes → n-1 edges

---

## Common Problem Patterns

- subtree problems
- path sum problems
- depth / height problems
- mirror / symmetry checks
- serialization problems

---

## Entry Path (Learning Order)

1. [[Tree]]
2. [[Binary Tree]]
3. [[Tree Traversal]]
4. [[DFS]]
5. [[BFS]]
6. [[Binary Search Tree]]
7. LCA + advanced tree problems

---

# Related

- [[Data Structures Hub]]
- [[Graph Theory Hub]]
- [[Algorithms Hub]]

---
