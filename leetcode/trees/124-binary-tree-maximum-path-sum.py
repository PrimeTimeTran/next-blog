'''
We use a global variable because the maximum path may be entirely within a subtree, 
and we return n.val + max(left, right) because a path passed upward cannot branch — it must choose only one direction.
'''
class Solution:
    def maxPathSum(self, root):
        self.res = root.val
        "The maximum path sum starting at n and going downward in one direction"
        def dfs(n):
            if not n: return 0
            l, r = dfs(n.left), dfs(n.right)
            self.res = max(self.res, n.val + l + r)
            return n.val + max(l, r)
        dfs(root)
        return self.res
