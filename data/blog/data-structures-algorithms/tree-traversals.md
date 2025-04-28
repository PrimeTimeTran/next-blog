---
title: 'Data Structures & Algorithms: Tree Traversals'
date: '2024-04-20'
tags: ['Data-Structures-Algorithms', 'Trees']
draft: false
summary: 'Explanations on the most common traversal orders used with Binary trees.'
---

# Introduction

Tree traversal algorithms are used to visit and process all nodes in a tree data structure.

There are three main types of tree traversal algorithms: `preorder`, `inorder`, and `postorder`.

Each algorithm processes the nodes of the tree in a different order, resulting in different sequences of node visits.

## Nodes

A tree data structure is a `node`. It can have one or more child `node`s.

The tree's nodes have a `val` and potentially `left` & `right` if it's a binary tree.

It's called a binary tree because it has at most 2 child nodes `left` & `right`.

A node with neither `left` or `right` is considered a `leaf` node.

```python
class Node:
	def __init__(self, key):
		self.val = key
		self.left = None
		self.right = None

root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
```

# Traversals

| Traversal     | 1st   | 2nd   | 3rd   |
| :------------ | :---- | :---- | :---- |
| **Preorder**  | Value | Left  | Right |
| **Inorder**   | Left  | Value | Right |
| **Postorder** | Left  | Right | Value |

This table highlights the order in which we'd process nodes/values of a binary tree depending on which traversal we're implementing.

## Pre Order

- In `preorder` the root node is visited/processed before it's children.
- Next we recursively visit the node's `left` & `right` child nodes.
- The order of operations is: visit the current node, traverse the left subtree, traverse the right subtree.
- Preorder traversal is useful for creating a copy of the tree, evaluating arithmetic expressions, and prefix notation in expression trees.

```python
def preorder(root):
    if root:
        print(root.val, end=" ")
        preorder(root.left)
        preorder(root.right)
```

## In Order

- In `inorder` the nodes are visited/processed in ascending order (for binary search trees) by recursively visiting the left subtree, processing current node value, and then recursively visiting the right subtree.
- The order of operations is: traverse the left subtree, process current node value, traverse the right subtree.
- `Inorder` traversal is useful for producing sorted lists from binary search trees, performing binary tree operations, and for expression trees where it outputs infix notation.

```python
def inorder(root):
    if root:
        inorder(root.left)
        print(root.val, end=" "),
        inorder(root.right)
```

## Post Order

- In `postorder` both left & right child nodes are visited/processed recursively. Only after a nodes children(if any) are processed is it processed itself.
- The order of operations is: traverse the left subtree, traverse the right subtree, process current node value.
- `Postorder` traversal is useful for deleting nodes in a tree, evaluating arithmetic expressions, and postfix notation in expression trees.

```python
def postorder(root):
    if root:
        postorder(root.left)
        postorder(root.right)
        print(root.val, end=" "),
```

# Conclusion

These traversal algorithms are fundamental in understanding and manipulating tree structures efficiently.

The choice of traversal depends on the specific task at hand and the desired order of processing nodes.
