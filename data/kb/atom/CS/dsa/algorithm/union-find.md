# Union-Find (Disjoint Set Union)

## Definition

Union-Find is a data structure used to efficiently track a collection of disjoint (non-overlapping) sets and support merging them.

It provides two core operations:

- **Find(x)** → returns the representative (root) of the set containing $x$
- **Union(x, y)** → merges the sets containing $x$ and $y$

---

## Core idea

> Each set is represented by a tree, where every node points to a parent, and the root represents the entire set.

---

## Operations

### Find

Returns the root of the set:

$$
\text{Find}(x) \rightarrow \text{root of } x
$$

---

### Union

Merges two sets:

$$
\text{Union}(x, y)
$$

Connects the roots of $x$ and $y$.

---

## Optimizations

### 1. Path Compression

During `find(x)`, flatten the tree:

- make every node on the path point directly to the root

> Speeds up future queries dramatically

---

### 2. Union by Rank / Size

Always attach the smaller tree under the larger one.

> Prevents trees from becoming tall

---

## Time complexity

With both optimizations:

$$
\text{Almost } O(1) \text{ per operation } \quad (\text{amortized})
$$

More precisely:

$$
O(\alpha(n))
$$

where $\alpha(n)$ is the inverse Ackermann function (grows extremely slowly).

---

## Use cases

- Connected components in graphs
- Cycle detection
- Grouping problems (e.g., allowed swaps)
- Kruskal’s algorithm (minimum spanning tree)
- Network connectivity problems

---

## Mental model

> Union-Find tracks **which elements belong together**, not how they are connected.

---

## When to use it

Use Union-Find when:

- you need to repeatedly merge groups
- you need to quickly check if two elements are in the same group
- connectivity matters more than structure

---

## Key intuition

> Treat connections as equivalence relationships:
> if $a$ is connected to $b$, and $b$ to $c$, then all belong to the same set.

---

## Limitation

- Does not store full graph structure
- Cannot answer path-related queries (use BFS/DFS for that)

---

## Example structure

Parent array representation:

```
Index:   0 1 2 3 4
Parent:  0 0 2 2 2
```

Sets:

- {0, 1}
- {2, 3, 4}

---

## Summary

> Union-Find is a fast way to maintain and merge disjoint groups, optimized for connectivity queries.
