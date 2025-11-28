'''
1. Understand
2. Diagram

            ← r
      0 1 2 3 4
    ┌─────────────────
l 0 │ 1 2 3 3 4
↓ 1 │   1 2 2 3
  2 │     1 1 3
  3 │       1 1
  4 │         1

We begin on both ends of the string. If they match, we add 2 to the total and then collapse our indices by one from both sides. 

When we're collapsing, if the indexes don't have matching characters, we don't immediately exit the loop because we need to exhaust the remaining characters, so we branch by incrementing l or decrementing r.

We do this until we've reached an invalid substring.

In the end, at each recursive call, for base cases, we'll return the appropriate length of the substring to reach the correct total.

3. Pseudocode
4. Code
5. BigO
Time: O(n²)
Space: O(n²)
    1. Memo table: Stores up to n² results ⇒ O(n²)
    2. Recursive call depth: At most n ⇒ O(n)
        (but dominated by n²)
'''
class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        @lru_cache(None)
        def dp(l, r):
            if l > r: return 0
            if l == r: return 1
            if s[l] == s[r]:
                return 2 + dp(l+1, r-1)
            return max(dp(l+1, r), dp(l, r-1))
        return dp(0, len(s)-1)
'''
1. Understand
dp[l][r] = length of longest palindromic subsequence in s[l:r+1]

2. Diagram
s = "bbbab"
[
    [1, 0, 0, 0, 0], 
    [0, 1, 0, 0, 0], 
    [0, 0, 1, 0, 0], 
    [0, 0, 0, 1, 0], 
    [0, 0, 0, 0, 1]
]

[
    [1, 2, 3, 3, 4], 
    [0, 1, 2, 2, 3], 
    [0, 0, 1, 1, 3], 
    [0, 0, 0, 1, 1], 
    [0, 0, 0, 0, 1]
]

final = 
i =  0  1  2  3  4
s =  b  b  b  a  b
    [1, 2, 3, 3, 4], 
    [0, 1, 2, 2, 3], 
    [0, 0, 1, 1, 3], 
    [0, 0, 0, 1, 1], 
    [0, 0, 0, 0, 1]


           r=0   r=1    r=2    r=3    r=4
         --------------------------------
l=0    |  s[0:0] s[0:1] s[0:2] s[0:3] s[0:4]
l=1    |         s[1:1] s[1:2] s[1:3] s[1:4]
l=2    |                s[2:2] s[2:3] s[2:4]
l=3    |                       s[3:3] s[3:4]
l=4    |                              s[4:4]

3. Pseudocode
4. Code
5. BigO
Time:   O(n²)
Space:  O(n²)
'''
class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        n = len(s)
        dp = [[0] * n for _ in range(n)]
        for i in range(n):
            dp[i][i] = 1
        # Check substrings of length 2, ..., n+1
        # In this way, we check substrings of length 2, 3, 4, 5 up to the length of s.
        for length in range(2, n+1):
            # Length of s & sought substring determines index of l and subsequently r.
            for l in range(n-length+1):
                r = l + length - 1
                if s[l] == s[r]:
                    dp[l][r] = 2 + (dp[l+1][r-1] if l + 1 <= r - 1 else 0)
                else:
                    dp[l][r] = max(dp[l+1][r], dp[l][r-1])
        return dp[0][-1]
'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time:   O(n²) 
Space:  O(n)
'''
class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        n = len(s)
        dp = [0] * n

        for l in range(n-1, -1, -1):
            prev_diag = 0       # this will represent dp[l+1][r-1]
            dp[l] = 1           # dp[l][l] = 1

            for r in range(l+1, n):
                temp = dp[r]    # store old dp[l+1][r] for next iteration

                if s[l] == s[r]:
                    dp[r] = 2 + prev_diag
                else:
                    dp[r] = max(dp[r], dp[r-1])

                prev_diag = temp

        return dp[n-1]
