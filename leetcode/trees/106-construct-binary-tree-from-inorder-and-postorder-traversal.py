class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        idx = {v: i for i, v in enumerate(inorder)}
        def dfs(lo, hi):
            # Recursion depth and termination
            if lo > hi: return None
            root = TreeNode(postorder.pop())
            m = idx[root.val]
            root.right = dfs(m + 1, hi)
            root.left  = dfs(lo, m - 1)
            return root
        return dfs(0, len(inorder) - 1)

