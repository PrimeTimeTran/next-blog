'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:   O(V + E)
Space:  O(V)
'''
class Solution:
    def cloneGraph(self, node: Optional['Node'], seen = {}) -> Optional['Node']:
        def dfs(n):
            if n in seen: return seen[n]
            seen[n] = Node(n.val)
            for nei in n.neighbors:
                seen[n].neighbors.append(dfs(nei))
            return seen[n]

        return dfs(node) if node else None
'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:   O()
Space:  O()
'''
