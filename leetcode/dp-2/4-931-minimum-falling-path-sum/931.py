'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
'''
class Solution:
    def minFallingPathSum(self, matrix: List[List[int]]) -> int:
        m, n = len(matrix), len(matrix[0])

        @lru_cache(None)
        def dp(r, c):
            if not (0 <= c < n):
                return float('inf')
            if r == 0:
                return matrix[0][c]
            return matrix[r][c] + min(
                dp(r-1, c-1),
                dp(r-1, c),
                dp(r-1, c+1)
            )

        return min(dp(m-1, c) for c in range(n))
'''
1. Understand
2. Diagram

[ 2,  1,  3 ]
[ 7,  6,  5 ]
[13, 13, 14]

3. Pseudocode
4. Code
5. Big O
'''
class Solution:
    def minFallingPathSum(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        for i in range(1, m):
            for j in range(n):
                if j - 1 >= 0:
                    p1 = grid[i-1][j-1]
                else: 
                    p1 = float('inf')
                p2 = grid[i-1][j]
                if j + 1 < n:
                    p3 = grid[i-1][j+1]
                else:
                    p3 = float('inf')
                grid[i][j] += min(p1, p2, p3)
        return min(grid[-1])
