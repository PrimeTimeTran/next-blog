class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        def findLCA(n):
            if n in (None, p, q): return n
            left = findLCA(n.left)
            right = findLCA(n.right)
            return n if left and right else left or right
        return findLCA(root)
