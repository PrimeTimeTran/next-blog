---
title: Learning new languages with Leetcode
date: '2022-08-15'
tags: ['Algorithms', 'Data structures', 'Leetcode', 'Python']
draft: true
summary: 'Mastering language syntax with Leetcode problems with Python'
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

104. Maximum Depth of Binary Tree

```python
class Solution:
  def maxDepth(self, root: Optional[TreeNode]) -> int:
    if not root:
      return 0

    return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
```

100. Same Tree

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

226. Invert Binary Tree

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

572. Subtree of Another Tree

```python
class Solution:
  def isSubtree(self, r: Optional[TreeNode], s: Optional[TreeNode]) -> bool:
    if not r: return False

    if self.sameTree(r, s):
      return True

    return (self.isSubtree(r.left, s) or self.isSubtree(r.right, s))


  def sameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
    if not p and not q:
      return True

    if p and q and p.val == q.val:
      return (self.sameTree(p.left, q.left) and self.sameTree(p.right, q.right))

    return False
```

235. Lowest Common Ancestor of a Binary Search Tree

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

102. Binary Tree Level Order Traversal

```python
class Solution:
  # BFS
  # Time O(N)
  # Memory O(N)
  def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
    res = []
    q = deque([root])

    while q:
      qLen = len(q)
      level = []
      for _ in range(qLen):
        node = q.popleft()
        if node:
          level.append(node.val)
          q.append(node.left)
          q.append(node.right)

      if level:
        res.append(level)

    return res
```

105. Construct Binary Tree from Preorder and Inorder Traversal

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
