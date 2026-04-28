# Binary Search Tree (BST)

## Definition

A **Binary Search Tree (BST)** is a binary tree where each node satisfies the ordering property:

$$
\text{left subtree} < \text{node} < \text{right subtree}
$$

This property holds recursively for every node in the tree.

---

## Core idea

> BSTs maintain sorted order through hierarchical structure, enabling efficient search, insertion, and deletion.

---

## Structure

Each node contains:

- a value
- a left child
- a right child

Constraints:

- all values in left subtree are less than the node
- all values in right subtree are greater than the node

---

## Operations

### Search

Compare target with current node:

- equal → found
- smaller → go left
- larger → go right

Time:

- average: $O(\log n)$
- worst: $O(n)$

---

### Insertion

- follow BST property to find correct position
- insert as a leaf node

---

### Deletion

Three cases:

1. **Leaf node** → remove directly
2. **One child** → replace node with its child
3. **Two children** → replace with inorder successor (smallest in right subtree)

---

## Traversals

### Inorder (Left → Root → Right)

$$
\text{Produces sorted order}
$$

### Preorder (Root → Left → Right)

- useful for copying tree

### Postorder (Left → Right → Root)

- useful for deletion

---

## Time complexity

| Operation | Average     | Worst  |
| --------- | ----------- | ------ |
| Search    | $O(\log n)$ | $O(n)$ |
| Insert    | $O(\log n)$ | $O(n)$ |
| Delete    | $O(\log n)$ | $O(n)$ |

Worst case occurs when tree becomes skewed (like a linked list).

---

## Balanced vs unbalanced

- **Balanced BST** → height ≈ $\log n$
- **Unbalanced BST** → height ≈ $n$

Balanced variants:

- AVL tree
- Red-Black tree

---

## Key intuition

> A BST is a sorted structure disguised as a tree.

Each decision cuts the search space in half (in the ideal case).

---

## When to use

- dynamic sorted data
- range queries
- ordered traversal
- predecessor/successor queries

---

## Limitations

- can degrade to $O(n)$ if unbalanced
- requires balancing for guaranteed performance

---

## Mental model

> At each node, you eliminate half the remaining possibilities based on ordering.

---

## Example

```id="2hxq7k"
        8
       / \
      3   10
     / \    \
    1   6    14
       / \   /
      4   7 13
```

Inorder traversal:

$$
1, 3, 4, 6, 7, 8, 10, 13, 14
$$
