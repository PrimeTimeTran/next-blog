class Codec:
    def serialize(self, root):
        vals = []
        def dfs(n):
            if n:
                vals.append(str(n.val))
                dfs(n.left)
                dfs(n.right)
            else:
                vals.append("#")
        dfs(root)
        return " ".join(vals)

    def deserialize(self, data):
        def dfs(vals):
            v = vals.pop(0)
            if v == '#': return
            n = TreeNode(v)
            n.left = dfs(vals)
            n.right = dfs(vals)
            return n
        return dfs(data.split())
