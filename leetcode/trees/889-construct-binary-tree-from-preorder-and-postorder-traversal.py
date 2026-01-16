class Solution:
    def constructFromPrePost(self, pre: List[int], post: List[int]) -> Optional[TreeNode]:
        j, stack = 0, [TreeNode(pre[0])]
        for v in pre[1:]:
            n = TreeNode(v)
            while stack[-1].val == post[j]:
                stack.pop()
                j += 1
            if not stack[-1].left:
                stack[-1].left = n
            else:
                stack[-1].right = n
            stack.append(n)
        return stack[0]


class Solution:
    def constructFromPrePost(self, pre: List[int], post: List[int]) -> Optional[TreeNode]:
        self.pre = 0
        idx = {v: i for i, v in enumerate(post)}
        def dfs(lo, hi):
            if lo > hi: return None
            root = TreeNode(pre[self.pre])
            self.pre += 1
            if lo == hi: return root
            m = idx[pre[self.pre]]
            root.left = dfs(lo, m)
            root.right = dfs(m + 1, hi - 1)
            return root
        return dfs(0, len(post) - 1)
