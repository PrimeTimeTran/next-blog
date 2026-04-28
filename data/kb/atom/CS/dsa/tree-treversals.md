# Tree Traversals

Tree traversal refers to the process of visiting every node in a tree in a specific order. The traversal strategy determines the order in which nodes are processed.

---

## Core Idea

Traversal = controlled exploration of a tree structure.

Every traversal answers:

> In what order should we visit nodes?

---

## Setup (Example Tree)

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

---

## Preorder Traversal (Root → Left → Right)

### Idea

Visit the current node first, then explore left subtree, then right subtree.

### Use cases

- Copying a tree
- Prefix expression evaluation
- Serialization

### Implementation

```python
def preorder(root):
    if root:
        print(root.val)
        preorder(root.left)
        preorder(root.right)
```

---

## Inorder Traversal (Left → Root → Right)

### Idea

Visit left subtree first, then node, then right subtree.

### Use cases

- Sorted output in Binary Search Trees
- Infix expression evaluation

### Implementation

```python
def inorder(root):
    if root:
        inorder(root.left)
        print(root.val)
        inorder(root.right)
```

---

## Postorder Traversal (Left → Right → Root)

### Idea

Visit children before processing the current node.

### Use cases

- Deleting a tree
- Postfix expression evaluation

### Implementation

```python
def postorder(root):
    if root:
        postorder(root.left)
        postorder(root.right)
        print(root.val)
```

---

## Mental Model

- Preorder → “process before children”
- Inorder → “process between children”
- Postorder → “process after children”

---

## Complexity

- Time: O(n) (each node visited once)
- Space: O(h) recursion stack (h = height of tree)

See: [[Complexity Analysis Hub]]

---

# Related Notes

- [[Tree]]
- [[DFS]]
- [[Binary Tree]]
- [[Recursion]]

---

# Why this is now an atom note (important)

This version:

- explains ONE concept (tree traversal patterns)
- is self-contained
- doesn’t try to be a tutorial article
- can be reused in multiple contexts (DSA hub, graph DFS, recursion, etc.)
