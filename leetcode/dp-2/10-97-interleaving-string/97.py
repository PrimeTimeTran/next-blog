'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time: O(m * n) where m = len(s1), n = len(s2)
Space: O(m * n) for memoization (plus O(m + n) recursion depth)
'''
from functools import lru_cache
class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        m,n,o = len(s1), len(s2), len(s3)
        if m + n != o:
            return False
        
        @lru_cache(None)
        def dp(i, j):
            if i == m and j == n:
                return True
            ans = False
            k = i + j
            if i < m and s1[i] == s3[k]:
                ans = ans or dp(i+1, j)
            if j < n and s2[j] == s3[k]:
                ans = ans or dp(i, j+1)
            return ans
        return dp(0, 0)
'''
1. Understand
Bottom Up 2D Dynamic Programming
2. Diagram
[
  [True, False, False, False, False, False], 
  [False, False, False, False, False, False], 
  [False, False, False, False, False, False], 
  [False, False, False, False, False, False], 
  [False, False, False, False, False, False], 
  [False, False, False, False, False, False]
]
[
  [True, False, False, False, False, False], 
  [True, False, False, False, False, False], 
  [True, True, True, True, True, False], 
  [False, True, True, False, True, False], 
  [False, False, True, True, True, True], 
  [False, False, False, True, False, True]
]


                ''     a      aa     aab    aabc   aabcc
            ------------------------------------------------
''          |   T      T      F      F      F      F
d           |   F      T      T      F      F      F
db          |   F      F      T      T      F      F
dbb         |   F      F      F      T      T      F
dbbc        |   F      F      F      F      T      T
dbbca       |   F      F      F      F      F      T

3. Pseudocode
4. Code
5. BigO
Time:   O(m * n)
Space:  O(m * n)
'''
class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        m, n = len(s1), len(s2)
        if m + n != len(s3):
            return False
        dp = [[False] * (n + 1) for _ in range(m + 1)]
        dp[0][0] = True
        for i in range(m + 1):
            for j in range(n + 1):
                if i == 0 and j == 0:
                    continue
                k = i + j - 1
                if i > 0 and s1[i - 1] == s3[k]:
                    dp[i][j] |= dp[i - 1][j]
                if j > 0 and s2[j - 1] == s3[k]:
                    dp[i][j] |= dp[i][j - 1]
        return dp[m][n]

'''
1. Understand
Bottom Up 2D Dynamic Programming Optimized
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:   O(m * n)
Space:  O(n) — rolling-row optimization where n = len(s2)
'''
class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        m, n = len(s1), len(s2)
        if m + n != len(s3):
            return False

        # dp[j] represents whether s1[:i] and s2[:j] interleave to form s3[:i+j]
        dp = [False] * (n + 1)
        dp[0] = True

        # initialize first row (i = 0)
        for j in range(1, n + 1):
            dp[j] = dp[j - 1] and s2[j - 1] == s3[j - 1]

        for i in range(1, m + 1):
            # update dp[0] for current i (only from s1)
            dp[0] = dp[0] and s1[i - 1] == s3[i - 1]
            for j in range(1, n + 1):
                k = i + j - 1
                # dp[j] (before update) is dp[i-1][j]
                # dp[j-1] is dp[i][j-1]
                dp[j] = (dp[j] and s1[i - 1] == s3[k]) or (dp[j - 1] and s2[j - 1] == s3[k])

        return dp[n]
