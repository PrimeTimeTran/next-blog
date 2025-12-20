'''
1. Understand
dp[i][j] = "dp[i][j] = the number of unique paths to reach cell (i, j)
starting from the top-left cell (0, 0)."

2. Diagram
m = 3, n = 7
dp(3,7)
    dp(2,7)
        dp(1,7)
            dp(0,7)
            +
            dp(1,6)
                dp(0,6)
                +
                dp(1,5)
                    dp(0,5)
                    +
                    dp(1,4)
                        dp(0,4)
                        +
                        dp(1,3)
                            dp(0,3)
                            +
                            dp(1,2)
                                dp(0,2)
                                +
                                dp(1,1)
        +
        dp(2,6)
            dp(1,6)   ← memo hit
            +
            dp(2,5)
                dp(1,5) ← memo hit
                +
                dp(2,4)
                    dp(1,4) ← memo hit
                    +
                    dp(2,3)
                        dp(1,3) ← memo hit
                        +
                        dp(2,2)
                            dp(1,2) ← memo hit
                            +
                            dp(2,1)
                                dp(1,1)
                                +
                                dp(2,0)
    +
    dp(3,6)
        dp(2,6) ← memo hit
        +
        dp(3,5)
            dp(2,5) ← memo hit
            +
            dp(3,4)
                dp(2,4) ← memo hit
                +
                dp(3,3)
                    dp(2,3) ← memo hit
                    +
                    dp(3,2)
                        dp(2,2) ← memo hit
                        +
                        dp(3,1)
                            dp(2,1) ← memo hit
                            +
                            dp(3,0)

3. Pseudocode
4. Code
5. Big O
Time:   O(m*n)
Space:  O(m*n)
    1. Memoization Cache        m * n
    2. Recursion Call Stack     m + n

Memoization space: O(m · n)
- You store one cached value for each grid cell
- Each state is (row, col)
- Total states = m × n
Recursion stack space: O(m + n)

'''
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        @lru_cache(None)
        def dp(i, j):
            if i == 0 and j == 0:
                return 1
            if i < 0 or j < 0:
                return 0
            return dp(i-1, j) + dp(i, j-1)
        return dp(m-1, n-1)

'''
1. Understand
dp[i][j] = "dp[i][j] = the number of unique paths to reach cell (i, j)
starting from the top-left cell (0, 0)."

Build to 2DP array where each cell is sum of top and left cells.

2. Diagram
m = 3, n = 7
[
    [1, 1, 1,  1,  1,  1,  1], 
    [1, 2, 3,  4,  5,  6,  7], 
    [1, 3, 6, 10, 15, 21, 28]
]
3. Pseudocode
4. Code
4. Big O
Time: O(m * n) — we fill each cell once
Space: O(m * n) — dp table; can be optimized to O(n) using a single row
'''
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [[0] * n for _ in range(m)]
        dp[0][0] = 1
        for i in range(m):
            for j in range(n):
                if i > 0:
                    dp[i][j] += dp[i-1][j]
                if j > 0:
                    dp[i][j] += dp[i][j-1]
        return dp[-1][-1]
