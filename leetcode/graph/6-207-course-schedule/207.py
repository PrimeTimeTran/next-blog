'''
1. Understand
This algorithm performs DFS cycle detection where each course and 
prerequisite edge is processed once, yielding linear time and space relative to the graph size.

2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:    O(V + E)
Space:   O(V + E)
'''
class Solution:
    def canFinish(self, N: int, P: List[List[int]]) -> bool:
        seen, g = {}, defaultdict(list)
        for a, b in P: g[a].append(b)
        def dfs(n):
            if n in seen: return seen[n]
            seen[n] = False
            for p in g[n]:
                if not dfs(p): return False
            seen[n] = True
            return True
        for i in range(N):
            if not dfs(i):
                return False
        return True
