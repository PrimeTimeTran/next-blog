---
title: Learning new languages with Leetcode
date: '2022-08-15'
tags: ['Algorithms', 'Data structures', 'Leetcode', 'Python']
draft: true
summary: 'Mastering common algorithms & data structures in Python using Leetcode problems'
---

## Learning new languages with Leetcode

[Leetcode](https://leetcode.com/) is a platform for enhancing technical skills.

In order to master my knowledge of algorithms, data structures, and Python I've decided to do a ton of problems on LeetCode.

Here are solutions to some of their most popular questions.

### Binary Trees

Provided this is a tree

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
```

104. [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/)

```python
class Solution:
  def maxDepth(self, root: Optional[TreeNode]) -> int:
    if not root:
      return 0

    return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
```

100. [Same Tree](https://leetcode.com/problems/same-tree/submissions/)

```python
class Solution:
  def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
    if not p and not q:
      return True

    if not p or not q:
      return False

    if p.val != q.val:
      return False

    return (self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right))
```

572. [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/submissions/)

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
      return self.sameTree(p.left, q.left) and self.sameTree(p.right, q.right)

    return False
```

226. [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/submissions/)

```python
class Solution:
  def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
    if not root:
      return None

    tmp = root.left
    root.left = root.right
    root.right = tmp

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
