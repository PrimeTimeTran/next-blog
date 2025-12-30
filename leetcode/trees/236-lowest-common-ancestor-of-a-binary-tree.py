'''
Each recursive call answers the question:
“Does this subtree contain p, q, both, or neither — and if both, what is their LCA?”
'''
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        def findLCA(n):
            if n in (None, p, q): return n
            l, r = findLCA(n.left), findLCA(n.right)
            return n if l and r else l or r
        return findLCA(root)
