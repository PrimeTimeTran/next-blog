''''
1. Understand
Preorder traversal because it enables us to deserialize the tree deterministically.

You cannot uniquely deserialize a binary tree using only inorder traversal.
Inorder traversal alone does not uniquely identify a binary tree, even with null markers, because the root position is not known without subtree size information.

“I can’t do this with inorder alone, because inorder traversal does not
uniquely determine a tree. I’d need either preorder/postorder or additional
structure information.”

5. Big O
Time:   O()
Space:  O()
'''
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
        "It is the same list object (same id), but it contains different items over time because it is being mutated."
        def dfs(vals):
            v = vals.pop(0)
            if v == '#': return
            n = TreeNode(v)
            n.left = dfs(vals)
            n.right = dfs(vals)
            return n
        return dfs(data.split())

class Codec:
    def serialize(self, root):
        vals = []
        def dfs(n):
            if n:
                vals.append(str(n.val))
                dfs(n.left)
                dfs(n.right)
            else:
                vals.append('#')
        dfs(root)
        return " ".join(vals)

    def deserialize(self, data):
        vals = iter(data.split())
        def doit():
            val = next(vals)
            if val == '#':
                return None
            n = TreeNode(val)
            n.left = doit()
            n.right = doit()
            return n
        return doit()



## Post Order
'''
1. Understand
- Read values from right to left
- Root is the last element
- Build right before left

For postorder deserialization, we must process the data in reverse and construct the right subtree before the left.

'''
class Codec:
    def serialize(self, root):
        vals = []
        def dfs(n):
            if not n:
                return vals.append('#')
            dfs(n.left)
            dfs(n.right)
            vals.append(str(n.val))
        dfs(root)
        return " ".join(vals)

    def deserialize(self, data):
        vals = data.split()[::-1]   # reverse
        def dfs():
            val = vals.pop(0)
            if val == '#': return
            node = TreeNode(val)
            node.right = dfs()
            node.left = dfs()
            return node
        return dfs()
    # With iter.
    # def deserialize(self, data):
    #     vals = iter(reversed(data.split()))

    #     def dfs():
    #         val = next(vals)
    #         if val == '#':
    #             return None
    #         node = TreeNode(val)
    #         node.right = dfs()
    #         node.left = dfs()
    #         return node

    #     return dfs()
