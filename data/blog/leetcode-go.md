---
title: Learning new languages with Leetcode
date: '2022-08-15'
tags: ['Algorithms', 'Data structures', 'Leetcode', 'Python']
draft: true
summary: 'Mastering language syntax with Leetcode problems with Python'
---

## Learning new languages with Leetcode

[Leetcode](https://leetcode.com/) is a platform for enhancing technical skills.

I challenged my

### Binary Trees

104. Maximum Depth of Binary Tree

```python3
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:

#   # Recursive dfs, O(n)
#   def maxDepth(self, root: Optional[TreeNode]) -> int:
#     if not root:
#       return 0

#     return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))


#   # Breadth first search
#   def maxDepth(self, root: Optional[TreeNode]) -> int:
#     if not root:
#       return 0

#     level = 0
#     q = deque([root])

#     while q:
#       for i in range(len(q)):
#         node = q.popleft()
#         if node.left:
#           q.append(node.left)
#         if node.right:
#           q.append(node.right)

#       level += 1
#     return level

  # Iterative dfs
  def maxDepth(self, root: Optional[TreeNode]) -> int:
    stack = [[root, 1]]
    res = 0

    while stack:
      node, depth = stack.pop()

      if node:
        res = max(res, depth)
        stack.append([node.left, depth + 1])
        stack.append([node.right, depth + 1])

    return res
```

100. Same Tree

```python3
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:

  # O(p + q)
  ˝
  def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
    if not p and not q:
      return True

    if not p or not q:
      return False

    if p.val != q.val:
      return False

    return (self.isSameTree(p.left, q.left) and
    self.isSameTree(p.right, q.right))
```

226. Invert Binary Tree

```python3
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
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

```python3
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:

    # O(S * T)
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