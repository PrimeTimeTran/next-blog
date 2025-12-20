'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time: O(m * n)
Space: O(m * n)
'''
class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        @lru_cache(None)
        def dp(r, c):
            if r == 0 and c == 0:
                return grid[0][0]
            if r < 0 or c < 0:
                return float('inf')
            return grid[r][c] + min(dp(r-1,c), dp(r, c-1))
        return dp(m-1, n-1)
'''
1. Understand
2. Diagram
start = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]

]
end = [
    [1, 4, 5], 
    [2, 7, 6], 
    [6, 8, 7]
]

3. Pseudocode
4. Code
5. Big O
Time: O(m * n)
Space: O(1)
'''
class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        for i in range(m):
            for j in range(n):
                if i == 0 and j == 0:
                    continue
                elif i == 0:
                   grid[i][j] += grid[i][j-1]
                elif j == 0:
                   grid[i][j] += grid[i-1][j]
                else:
                    grid[i][j] += min(grid[i-1][j], grid[i][j-1])

        return grid[-1][-1]
