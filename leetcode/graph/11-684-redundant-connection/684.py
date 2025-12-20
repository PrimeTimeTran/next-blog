'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:    O(log N) amortized per operation
Space:   O(N) for parent and rank arrays
'''
class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        n = len(edges)
        parent = list(range(n+1))
        def find(x):
            if x != parent[x]:
                parent[x] = find(parent[x])
            return parent[x]

        def union(x, y):
            pX, pY = find(x), find(y)
            if pX == pY: return False
            parent[pX] = pY
            return True

        for u, v in edges:
            if not union(u, v):
                return [u, v]
