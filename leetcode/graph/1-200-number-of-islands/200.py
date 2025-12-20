'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:   O()
Space:  O()
'''
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        res, seen, R, C = 0, set(), len(grid), len(grid[0])
        
        def dfs(r,c):
            inbounds = 0 <= r < R and 0 <= c < C
            if inbounds and (r,c) not in seen and grid[r][c] == "1":
                seen.add((r,c))
                dfs(r+1,c)
                dfs(r-1,c)
                dfs(r,c+1)
                dfs(r,c-1)
                return True
        
        for r in range(R):
            for c in range(C):
                if dfs(r,c) and grid[r][c] == "1":
                    res+=1
        return res


'''
1. Understand
Union Find
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:   O()
Space:  O()
'''
class Solution:
    def numIslands(self, g: List[List[str]]) -> int:
        if not g: return 0
        parent, rank, m, n = {}, {}, len(g), len(g[0])
        def find(x):
            if x != parent[x]:
                parent[x] = find(parent[x])
            return parent[x]
        def union(x, y):
            parent[find(x)] = find(y)

        # Build parent list for land cells where each cell is it's own parent.
        for r in range(m):
            for c in range(n):
                if g[r][c] == "1":
                    parent[(r,c)] = (r,c)
        
        for r in range(m):
            for c in range(n):
                if g[r][c] == "1":
                    for dr, dc in [(1,0), (0,1)]:
                        nr, nc = r+dr, c+dc
                        inbounds = 0 <= nr < m and 0 <= nc < n
                        if inbounds and g[nr][nc] == "1":
                            # Found landcell, join it with it's neighbors so adjacent land cells share a parent.
                            union((r,c), (nr, nc))
        # Because we joined adjacent land cells, now we know that the number of unique representatives == num of islands
        return len({find(x) for x in parent})

'''
1. Understand
Union Find. Union by rank.
Speeds up the union operation.

2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:   O(R⋅C⋅α(R⋅C)) => O(R · C)
Space:  O(R · C)

“α(n) is the inverse Ackermann function, which grows so slowly that for any realistic input size it’s ≤ 4, so Union–Find is effectively constant time per operation.”
'''
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid: return 0
        rank, parent, R, C = {}, {}, len(grid), len(grid[0])
        def find(x):
            if parent[x] != x: parent[x] = find(parent[x])
            return parent[x]
        def union(x, y):
            rx, ry = find(x), find(y)
            if rx == ry: return
            if rank[rx] < rank[ry]:
                parent[rx] = ry
            elif rank[rx] > rank[ry]:
                parent[ry] = rx
            else:
                parent[ry] = rx
                rank[rx] += 1
        for r in range(R):
            for c in range(C):
                if grid[r][c] == "1":
                    parent[(r, c)] = (r, c)
                    rank[(r, c)] = 0
        for r in range(R):
            for c in range(C):
                if grid[r][c] == "1":   
                    for dr, dc in [(1, 0), (0, 1)]:
                        nr, nc = r + dr, c + dc
                        inbounds = 0 <= nr < R and 0 <= nc < C
                        if inbounds and grid[nr][nc] == "1":
                            union((r, c), (nr, nc))
        roots = set(find(x) for x in parent)
        return len(roots)
