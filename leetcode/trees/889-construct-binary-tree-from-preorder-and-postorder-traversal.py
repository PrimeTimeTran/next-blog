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
