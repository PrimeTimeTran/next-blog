'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time: O(m * n) where m = rows, n = cols (each state computed once with memo)
Space: O(m * n) for memoization (plus O(m + n) recursion depth)
'''
class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        m, n = len(obstacleGrid), len(obstacleGrid[0])
        @lru_cache(None)
        def dp(i, j):
            if obstacleGrid[i][j] == 1:
                return 0
            if i == 0 and j == 0:
                return 1
            if i < 0 or j < 0:
                return 0
            return dp(i-1, j) + dp(i, j-1)
        return dp(m-1, n-1)
'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time: O(m * n) — we fill each cell once
Space: O(m * n) — dp table; can be optimized to O(n) using a single row
'''
class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        m, n = len(obstacleGrid), len(obstacleGrid[0])
        dp = [[0] * n for _ in range(m)]
        dp[0][0] = 1
        for r in range(m):
            for c in range(n):
                if obstacleGrid[r][c] == 1:
                    dp[r][c] = 0
                    continue
                if r > 0:
                    dp[r][c] += dp[r-1][c]
                if c > 0:
                    dp[r][c] += dp[r][c-1]
        return dp[-1][-1]
