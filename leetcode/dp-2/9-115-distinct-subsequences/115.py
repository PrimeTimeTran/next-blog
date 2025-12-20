
'''
1. Understand
How many distinct subsequences in s can be found that will equal t?
2. Diagram

dp(i, j): number of ways to form t[j:] using s[i:]
    s = "r a b b b i t"
    idx  0 1 2 3 4 5 6

    t = "r a b b i t"
    idx  0 1 2 3 4 5

dp(0, 0)   # match "rabbbit" → "rabbit"

dp(0,0)   s[0]='r', t[0]='r'
├── skip 'r' → dp(1,0)                     ❌
└── take 'r' → dp(1,1)
    dp(1,1)   s[1]='a', t[1]='a'
    └── take 'a' → dp(2,2)
        dp(2,2)   s[2]='b', t[2]='b'
        ├── skip 'b' → dp(3,2)
        │   dp(3,2)   s[3]='b', t[2]='b'
        │   ├── skip 'b' → dp(4,2)
        │   │   dp(4,2)   s[4]='b', t[2]='b'
        │   │   └── take 'b' → dp(5,3)
        │   │       dp(5,3)   s[5]='i', t[3]='b'   ❌
        │   └── take 'b' → dp(4,3)
        │       dp(4,3)   s[4]='b', t[3]='b'
        │       └── take 'b' → dp(5,4)
        │           dp(5,4)   s[5]='i', t[4]='i'
        │           └── take 'i' → dp(6,5)
        │               dp(6,5)   s[6]='t', t[5]='t'
        │               └── take 't' → dp(7,6) ✅
        │
        └── take 'b' → dp(3,3)
            dp(3,3)   s[3]='b', t[3]='b'
            ├── skip 'b' → dp(4,3)
            │   dp(4,3)   s[4]='b', t[3]='b'
            │   └── take 'b' → dp(5,4)
            │       dp(5,4) → dp(6,5) → dp(7,6) ✅
            │
            └── take 'b' → dp(4,4)
                dp(4,4)   s[4]='b', t[4]='i'   ❌

3. Pseudocode
4. Code
5. BigO
time: O(len(s) * len(t))
space: O(len(s) * len(t))
'''
class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        @lru_cache(None)
        def dp(i, j):
            if j == len(t): return 1
            if i == len(s): return 0
            ans = dp(i+1, j)
            if s[i] == t[j]:
                ans += dp(i+1, j+1)
            return ans
        return dp(0,0)
'''
1. Understand
2. Diagram
s = "rabbbit", t = "rabbit"

i = 0
             ""   r   a   b   b   i   t
          --------------------------------
""        |   1   0   0   0   0   0   0
"r"       |   1   0   0   0   0   0   0
"ra"      |   1   0   0   0   0   0   0
"rab"     |   1   0   0   0   0   0   0
"rabb"    |   1   0   0   0   0   0   0
"rabbb"   |   1   0   0   0   0   0   0
"rabbb i" |   1   0   0   0   0   0   0
"rabbb it"|   1   0   0   0   0   0   0

i = 7
             ""   r   a   b   b   i   t
          --------------------------------
""        |   1   0   0   0   0   0   0
"r"       |   1   1   0   0   0   0   0
"ra"      |   1   1   1   0   0   0   0
"rab"     |   1   1   1   1   0   0   0
"rabb"    |   1   1   1   2   1   0   0
"rabbb"   |   1   1   1   3   3   0   0
"rabbbit" |   1   1   1   3   3   3   0
"rabbbit" |   1   1   1   3   3   3   3

3. Pseudocode
4. Code
5. BigO
Time:   O(m * n) where m = len(s), n = len(t)
Space:  O(m * n) for the full DP table (can be reduced to O(n) with a single-row/rolling array)
'''
class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        m, n = len(s), len(t)
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        for i in range(m + 1):
            dp[i][0] = 1

        for i in range(1, m + 1):
            for j in range(1, n + 1):
                # All ways that already formed t[:j] without using s[i-1]
                dp[i][j] = dp[i - 1][j]
                
                # New ways created by using s[i-1] to match t[j-1]
                if s[i - 1] == t[j - 1]:
                    dp[i][j] += dp[i - 1][j - 1]

        return dp[m][n]
