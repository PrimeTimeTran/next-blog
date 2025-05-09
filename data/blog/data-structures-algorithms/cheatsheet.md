---
draft: false
date: '2020-04-24'
title: 'Data Structures: A Quick Reference'
summary: 'An overview of data structures used to solve more complex problems in the field of computer science.'
tags: ['data structures', 'python']
---

# Introduction

Here are a few things to consider when trying to identify what data structure to use for algorithms.

We'll cover the following sorting algorithms.

<TOCInline toc={props.toc} exclude="Overview" toHeading={4} />

## Array/List

## Hash Table/Map

## Set

## Stack

Last In First Out(L.I.F.O.)

| Situation                                 | Use   | Reasoning / Pattern             |
| ----------------------------------------- | ----- | ------------------------------- |
| Need to process elements in reverse order | Stack | LIFO (Last In, First Out)       |
| Tracking function calls / recursion       | Stack | Call stack mirrors nested calls |
| Undo functionality (e.g., editor)         | Stack | Last action undone first        |
| Balanced parentheses / bracket matching   | Stack | Pairs resolved in reverse order |

## Queue

First In First Out(F.I.F.O.)
| Situation | Use | Reasoning / Pattern |
| ---------------------------------------------- | ----- | -------------------------------- |
| Need to process elements in the order received | Queue | FIFO (First In, First Out) |
| Level-order traversal of tree (BFS) | Queue | Process nodes layer by layer |
| Scheduling tasks / simulation | Queue | Tasks processed in arrival order |

## Deque

Double ended queue

## Linked List

A linear data structure where elements, called nodes, are linked together.

## Tree

A data structure composed of nodes that contain values & leafs.

### Binary Tree

A tree where each node has only two children nodes, left & right.

#### Binary Search Tree(BST)

A binary search tree where the value of the left child is less than the parent node's value. The right node's value is greater than the parent node's value.

#### Heap

| Situation                    | Use                        |
| ---------------------------- | -------------------------- |
| Always want largest/smallest | Max/Min heap               |
| Keep top K of something      | Min/Max heap of size K     |
| Custom processing order      | Priority queue (heap)      |
| Streaming data               | Heap(s) to track top items |

#### Segment Tree/Fenwick Tree

### Trie(Prefix Tree)

## Graph

Nodes & Edges.
Node's are airports and edges are the flights between them.

Furthermore graphs can be directed or undirected meaning that the flights can be listed as pointing from one airport to another or both ways(undirected).

The edges can have weighted as well meaning that the edges from one node to another may vary in value. For example the price from an airport to airport a & b may differ.

## Union-Find(Disjoint Set)

# Conclusion

| Data Structure              | Typical Use Cases                                                                                                       |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Array/List                  | Index-based access, iteration                                                                                           |
| Hash Table (Map)            | Fast lookups, counting, caching                                                                                         |
| Set                         | Fast membership tests, removing duplicates                                                                              |
| Stack                       | Undo operations, expression parsing, backtracking, DFS                                                                  |
| Queue                       | Scheduling, BFS, order of processing                                                                                    |
| Deque                       | Sliding window problems, double-ended queue operations                                                                  |
| Linked List                 | Efficient insertions/deletions at head/tail                                                                             |
| Tree                        | Representing data with a parent-child relationship, such as file systems, organizational charts, or XML/HTML documents. |
| Binary Tree                 | Hierarchical data, expression parsing                                                                                   |
| Binary Search Tree (BST)    | Sorted data, efficient range queries                                                                                    |
| Heap (Priority Queue)       | Getting largest/smallest elements efficiently, scheduling                                                               |
| Trie (Prefix Tree)          | Prefix search, autocomplete                                                                                             |
| Graph                       | Network problems, path-finding, connected components                                                                    |
| Union-Find (Disjoint Set)   | Connectivity queries, Kruskal’s algorithm                                                                               |
| Segment Tree / Fenwick Tree | Range queries and updates (e.g., sum, min, max)                                                                         |
