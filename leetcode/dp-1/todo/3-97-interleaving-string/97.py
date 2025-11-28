# Solution 1 (DFS without memo):
# Time Complexity: O(2^(m+n))     # exponential brute force
# Space Complexity: O(m+n)        # recursion depth

class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        m, n, o = len(s1),len(s2), len(s3)
        if m + n != o:
            return False

        def dfs(i, j):
            if i == m and j == n:
                return True

            k = i + j
            ans = False

            if i < m and s1[i] == s3[k]:
                ans = ans or dfs(i + 1, j)
            if j < n and s2[j] == s3[k]:
                ans = ans or dfs(i, j + 1)

            return ans

        return dfs(0, 0)


# Solution 2 (DFS + Memoization):
# Time Complexity: O(m*n)         # each (i, j) computed once
# Space Complexity: O(m*n)        # memo cache + recursion depth

class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        m, n, o = len(s1),len(s2), len(s3)
        if m + n != o:
            return False
        
        @lru_cache()
        def dfs(i, j):
            if i == m and j == n:
                return True

            k = i + j
            ans = False

            if i < m and s1[i] == s3[k]:
                ans = ans or dfs(i + 1, j)
            if j < n and s2[j] == s3[k]:
                ans = ans or dfs(i, j + 1)

            return ans

        return dfs(0, 0)


# Solution 3 (Bottom-Up 2D DP):
# Time Complexity: O(m*n)
# Space Complexity: O(m*n)

class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        m, n = len(s1), len(s2)
        if m + n != len(s3): 
            return False

        dp = [[False]*(n+1) for _ in range(m+1)]
        dp[0][0] = True

        for i in range(1, m+1):
            dp[i][0] = dp[i-1][0] and s1[i-1] == s3[i-1]

        for j in range(1, n+1):
            dp[0][j] = dp[0][j-1] and s2[j-1] == s3[j-1]

        for i in range(1, m+1):
            for j in range(1, n+1):
                dp[i][j] = (
                    (dp[i-1][j] and s1[i-1] == s3[i+j-1]) or
                    (dp[i][j-1] and s2[j-1] == s3[i+j-1])
                )

        return dp[m][n]


# Solution 4 (Bottom-Up 1D Rolling Array):
# Time Complexity: O(m*n)
# Space Complexity: O(n)          # optimized to one row

class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        m, n, l = len(s1), len(s2), len(s3)
        if m + n != l:
            return False

        if m < n:
            return self.isInterleave(s2, s1, s3)

        dp = [False] * (n + 1)
        dp[0] = True

        for j in range(1, n+1):
            dp[j] = dp[j-1] and s2[j-1] == s3[j-1]

        for i in range(1, m+1):
            dp[0] = dp[0] and s1[i-1] == s3[i-1]
            for j in range(1, n+1):
                dp[j] = (
                    (dp[j] and s1[i-1] == s3[i+j-1]) or
                    (dp[j-1] and s2[j-1] == s3[i+j-1])
                )

        return dp[n]
