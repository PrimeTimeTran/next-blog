'''
1. Understand
Recursive DFS implementation.

2. Diagram
3. Pseudocode
4. Code
5. BigO
    Time:  O(R*C)
    Space: O(R*C) for the `seen` set and recursion stack (worst case).
'''
from typing import List
from collections import deque


class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        R = len(grid)
        C = len(grid[0]) if R else 0
        seen = set()
        self.ans = 0

        def dfs(r: int, c: int) -> None:
            if (r, c) in seen:
                return
            safe = 0 <= r < R and 0 <= c < C
            water = grid[r][c] == 0
            if not safe or water:
                self.ans += 1
            else: 
                seen.add((r, c))
                dfs(r + 1, c)
                dfs(r - 1, c)
                dfs(r, c + 1)
                dfs(r, c - 1)

        for r in range(R):
            for c in range(C):
                if grid[r][c] == 1 and (r, c) not in seen:
                    dfs(r, c)
        return self.ans
    
    
    
class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        R, C = len(grid), len(grid[0])
        def dfs(r, c):
            if r < 0 or r >= R or c < 0 or c >= C or grid[r][c] == 0:
                return 1
            if grid[r][c] == -1: 
                return 0
            grid[r][c] = -1
            return dfs(r+1, c) + dfs(r-1, c) + dfs(r, c+1) + dfs(r, c-1)

        for r in range(R):
            for c in range(C):
                if grid[r][c] == 1:
                    return dfs(r,c)
'''
1. Understand
Iterative BFS implementation using a queue.

2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:  O(R*C) — each land cell is enqueued and processed at most once.
Space: O(R*C) — visited set and queue in the worst case.
'''
class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        R, C = len(grid), len(grid[0])
        q, ans, seen = deque(), 0, set()

        for r in range(R):
            for c in range(C):
                if grid[r][c] == 1 and (r, c) not in seen:
                    seen.add((r, c))
                    q.append((r, c))
                    while q:
                        x, y = q.popleft()
                        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                            nx, ny = x + dx, y + dy
                            unsafe = not (0 <= nx < R and 0 <= ny < C)
                            if unsafe or grid[nx][ny] == 0:
                                ans += 1
                            else:
                                if (nx, ny) not in seen:
                                    seen.add((nx, ny))
                                    q.append((nx, ny))
        return ans
