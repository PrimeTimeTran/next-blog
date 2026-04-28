# Tree — Atom

## Core Idea

A tree is a hierarchical data structure consisting of nodes connected by edges, with no cycles, forming a parent-child relationship where each node has at most one parent.

---

## Key Properties

### Hierarchical Structure

- Root node at the top level
- Parent-child relationships
- No cycles (acyclic)
- Connected graph

### Node Relationships

- **Root**: Topmost node with no parent
- **Parent**: Node directly above another node
- **Child**: Node directly below a parent
- **Leaf**: Node with no children
- **Internal Node**: Node with at least one child

---

## Tree Terminology

### Height and Depth

- **Height**: Longest path from root to leaf
- **Depth**: Distance from root to a node
- **Level**: Nodes at same depth

### Subtrees

- Portion of tree rooted at a node
- Each child of a node is root of its own subtree

### Size

- Total number of nodes in tree
- Can be calculated recursively

---

## Tree Types

### Binary Tree

- Each node has at most 2 children
- Left and right subtrees
- Most common type

### Binary Search Tree (BST)

- Left subtree: values < node
- Right subtree: values > node
- Efficient search, insert, delete: O(log n)

### Balanced Trees

- AVL Tree: Height-balanced
- Red-Black Tree: Self-balancing BST
- Maintains O(log n) operations

### Other Types

- N-ary Tree: Each node can have n children
- Trie (Prefix Tree): For string operations
- Heap: Complete binary tree with heap property

---

## Tree Representations

### Node-Based (Linked Structure)

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

### Array-Based (Complete Binary Tree)

- Root at index 0
- Left child: 2\*i + 1
- Right child: 2\*i + 2
- Parent: (i-1)//2

---

## Common Operations

### Traversal

- **Inorder**: Left → Root → Right
- **Preorder**: Root → Left → Right
- **Postorder**: Left → Right → Root
- **Level Order**: BFS by levels

### Search and Modification

- Insert node
- Delete node
- Search for value
- Find minimum/maximum

### Tree Calculations

- Height calculation
- Size calculation
- Check if balanced
- Find lowest common ancestor (LCA)

---

## Tree Algorithms

### Tree Construction

- Build from traversals
- Convert between representations

### Tree Validation

- Check BST property
- Verify completeness
- Detect balance

### Advanced Operations

- Serialize/deserialize
- Mirror tree
- Diameter calculation
- Path sum problems

---

## When to Use Trees

- Hierarchical data (file systems, organization charts)
- Sorted data with fast operations (BST)
- Priority queues (heaps)
- Decision trees (machine learning)
- Expression parsing (syntax trees)

---

## Implementation Considerations

- Choose tree type based on use case
- Balance trees for performance
- Handle edge cases (empty tree, single node)
- Recursive vs iterative approaches
- Memory management for large trees

---

## Common Mistakes

- Confusing tree height vs depth
- Forgetting to handle null children
- Not maintaining BST invariants
- Inefficient traversal choices

---

# Related Concepts

- [[Graph]] — trees are special graphs
- [[Binary Search Tree]]
- [[Heap]]
- [[Trie]]
- [[Tree Traversal Algorithms]]
