class Solution(object):
    def isBalanced(self, root):
        def dfs(n):
            if not n: return 0
            l, r = dfs(n.left), dfs(n.right)
            if l < 0 or r < 0 or abs(l-r) > 1: return -1
            return 1 + max(l, r)
        return dfs(root) >= 0

