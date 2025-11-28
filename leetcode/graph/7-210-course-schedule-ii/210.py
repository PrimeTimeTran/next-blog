'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:    O(V + E)
Space:   O(V + E)
'''
class Solution:
    def findOrder(self, N: int, P: List[List[int]]) -> bool:
        seen, g, res = {}, defaultdict(list), []
        for a, b in P: g[a].append(b)
        def dfs(n):
            if n in seen: return seen[n]
            seen[n] = False
            for p in g[n]:
                if not dfs(p): return False
            seen[n] = True
            res.append(n)
            return True
        for i in range(N):
            if not dfs(i):
                return []
        return res


class Solution:
    def findOrder(self, N: int, P: List[List[int]]) -> List[int]:
        res, g, seen = [], defaultdict(list), {}
        for u, v in P: g[u].append(v)
        def dfs(c):
            if c in seen: return seen[c]
            seen[c] = False
            if not all(dfs(p) for p in g[c]): return False
            seen[c] = True
            res.append(c)
            return True
        return [] if not all(dfs(c) for c in range(N)) else res 
