'''
Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

Recursively build tree nodes using preorder's 0 index.
Use the index of preorder[0] to identify which index to partition at for recursive calls(paritioning both preorder & inorder).
time: O(n) where n is the length of nodes in our tree
space: O(n) where n is the length of nodes in our tree


# Preorder
[root | left subtree | right subtree]
# Inorder
[left subtree | root | right subtree]
'''
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        if not preorder or not inorder: return
        root = TreeNode(preorder[0])
        m = inorder.index(preorder[0])
        root.left = self.buildTree(preorder[1:m+1], inorder[:m])
        root.right = self.buildTree(preorder[m+1:], inorder[m+1:])
        return root


'''
Much faster
Time:   O(n)
Space:  O(n)
'''
class Solution:
    def buildTree(self, preorder, inorder):
        idx = {v: i for i, v in enumerate(inorder)}
        self.pre_i = 0
        def helper(lo, hi):
            if lo > hi: return None
            root_val = preorder[self.pre_i]
            self.pre_i += 1
            root = TreeNode(root_val)
            mid = idx[root_val]
            root.lo = helper(lo, mid - 1)
            root.hi = helper(mid + 1, hi)
            return root
        return helper(0, len(inorder) - 1)
