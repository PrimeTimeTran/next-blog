class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        def dfs(lo, hi):
            if lo > hi: return None
            root = TreeNode(postorder.pop())
            m = inorder.index(root.val)
            root.right = dfs(m + 1, hi)
            root.left = dfs(lo, m - 1)
            return root
        return dfs(0, len(inorder) - 1)
