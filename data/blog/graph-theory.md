---
title: Intro to Graph Theory with Python
date: '2022-08-21'
tags: ['Algorithms', 'Data structures', 'Leet Code', 'Python']

summary: 'An introduction to graph theory using Leet Code problems and Python'
---

## Intro to Graph Theory with Python

To master algorithms, data structures, and Python I began working on [Leet Code](https://leetcode.com/).

Here's what I've learned about [graph theory](https://en.wikipedia.org/wiki/Graph_theory#:~:text=In%20mathematics%2C%20graph%20theory%20is,also%20called%20links%20or%20lines) along the way.

[![Watch the video](https://i.imgur.com/EaSxt5l.png)](https://www.youtube.com/watch?v=GiDsjIBOVoA)

The content in the video about is much deeper in the field. If you watch it you'll appreciate how simple this post is.

### Binary Trees

One of the first data structures in computer science is called a binary tree.

Binary trees start with a node.

The starting node is called the root node.

Every node will have a value.

Nodes can have one or more child nodes.

Lines connecting the nodes indicate that their is a parent child relationship.

In binary trees, nodes can have a maximum of 2 children.

The children can also have their own children

Below is a Python Node.

```python
class Node:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right
```

Below we'll look at a few Leet Code problems and their solutions.

104. [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/)

We use recursion.

Our base case of nodes with no children we return 0.

In the body of the function we return 1 + the max value of the left and right nodes.

```python
class Solution:
  def maxDepth(self, root: Optional[TreeNode]) -> int:
    if not root:
      return 0

    return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
```

100. [Same Tree](https://leetcode.com/problems/same-tree/submissions/)

We use recursion.

We guard for the base case of either left or right child nodes being null(unbalanced)

We guard for the case in which the value of the left and right nodes not being the same.

```python
class Solution:
  def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
    if not p and not q:
      return True
    if p and q and p.val == q.val:
      return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
```

572. [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/submissions/)

We use recursion.

We guard for the case we don't have a root node.

We check if the tree is the same using helper method.

```python
class Solution:
  def isSubtree(self, r: Optional[TreeNode], s: Optional[TreeNode]) -> bool:
    if not r: return False

    if self.sameTree(r, s):
      return True

    return self.isSubtree(r.left, s) or self.isSubtree(r.right, s)

  def sameTree(self, p, q):
    if not p and not q:
      return True
    if p and q and p.val == q.val:
      return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
```

226. [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/submissions/)

We use recursion.

We guard the base case of a root's nodes being null.

We swap left and right nodes.

```python
class Solution:
  def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
    if not root:
      return None

    root.left, root.right = root.right, root.left

    self.invertTree(root.left)
    self.invertTree(root.right)

    return root
```

235. [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

```python
class Solution:
  def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
    cur = root

    while cur:
      if p.val > cur.val and q.val > cur.val:
        cur = cur.right
      elif p.val < cur.val and q.val < cur.val:
        cur = cur.left
      else:
        return cur
```

102. [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/)

```python
class Solution:
  def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
    res = []

    q = deque([root])

    while q:
      level = []
      for _ in range(len(q)):
        node = q.popleft()

        if node:
          level.append(node.val)
          if node.left:
            q.append(node.left)
          if node.right:
            q.append(node.right)

      if level:
        res.append(level)

    return res
```

105. [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

```python
class Solution:
  def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
    if not preorder or not inorder:
      return None

    root = TreeNode(preorder[0])
    mid = inorder.index(preorder[0])

    root.left = self.buildTree(preorder[1:mid + 1], inorder[:mid])
    root.right = self.buildTree(preorder[mid + 1:], inorder[mid + 1:])

    return root
```

98. [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)

```python
class Solution:
  def isValidBST(self, root: Optional[TreeNode]) -> bool:
    def valid(node, left, right):
      if not node:
        return True

      if node.val > left and node.val < right:
        return valid(node.left, left, node.val) and valid(node.right, node.val, right)

    return valid(root, float('-inf'), float('inf'))
```

230. [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)

```python
class Solution:
  def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
    n = 0
    stack = []
    cur = root

    while cur or stack:
      while cur:
        stack.append(cur)
        cur = cur.left

      cur = stack.pop()
      n += 1

      if n == k:
          return cur.val

      cur = cur.right
```

208. [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)

```python

```

211. [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/)

```python

```

297. [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)

```python
class Codec:
  def serialize(self, root):
    def doit(node):
      if node:
        vals.append(str(node.val))
        doit(node.left)
        doit(node.right)
      else:
        vals.append("#")
    vals = []
    doit(root)
    return ' '.join(vals)

  def deserialize(self, data):
    def doit():
      val = next(vals)

      if val == '#':
        return None
      node = TreeNode(int(val))
      node.left = doit()
      node.right = doit()
      return node
    vals = iter(data.split())
    return doit()
```

124. [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)

```python
class Solution:
  def maxPathSum(self, root):
    def maxSum(root):
      if not root:
          return 0
      l_sum = maxSum(root.left)
      r_sum = maxSum(root.right)
      l = max(0, l_sum)
      r = max(0, r_sum)
      res[0] = max(res[0], root.val + l + r)
      return root.val + max(l, r)

    res = [-float('inf')]
    maxSum(root)
    return res[0]
```

212. [Word Search II](https://leetcode.com/problems/word-search-ii/)

```python

```

### LinkedList

Assuming LinkedList

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
```

21. Merge Two Sorted Lists

```python

class Solution:
    def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
      dummy = ListNode()

      tail = dummy


      while l1 and l2:
        if l1.val < l2.val:
          tail.next = l1
          l1 = l1.next
        else:
          tail.next = l2
          l2 = l2.next

        tail = tail.next

      if l1:
        tail.next = l1
      else:
        tail.next = l2
      return dummy.next
```

206. Reverse LinkedList

```python
class Solution:
  def reverse List(self, head: Optional[ListNode]) -> Optional[ListNode]:
    prev, curr = None, head
    while curr:
      nxt = curr.next
      curr.next = prev

      prev = curr
      curr = nxt

    return prev
```

141. Linked List Cycle

```python
class Solution:
  def hasCycle(self, head: Optional[ListNode]) -> bool:
    slow, fast = head, head

    while fast and fast.next:
      slow = slow.next
      fast = fast.next.next

      if slow == fast:
        return True

    return False
```

19. Remove Nth Node from the End of a Linked List

```python3

```
