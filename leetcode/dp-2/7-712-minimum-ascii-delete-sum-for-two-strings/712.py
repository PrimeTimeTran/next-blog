'''
1. Understand

We want the minimum ASCII delete sum needed to make two strings equal.
We can only delete characters, and deleting a character costs its ASCII value.

This is essentially the minimum cost to align two strings, 
similar to edit distance but with only deletions allowed.

🔍 Key Insight
For each pair of indices (i, j):

- If characters match (s1[i] == s2[j]):
    → Keep them both, move to (i+1, j+1).
- If they don’t match, we have two choices:
    1. Delete s1[i] → cost = ord(s1[i]) + dp(i+1, j)
    2. Delete s2[j] → cost = ord(s2[j]) + dp(i, j+1)

Take the minimum.

🧠 Base Cases:
- If we exhaust s1, we must delete everything left in s2.
- If we exhaust s2, we must delete everything left in s1.

DP remembers answers for (i, j) so we don’t recompute.

2. Diagram
----------------------------------------------------------------------
s1 = "sea"
s2 = "eat"

         e    a    t    ''           <-- s2
     +-------------------------+
 ''  |  x    x    x    0       |
 s   |  x    x    x            |
 e   |  x    x    x            |
 a   |  x    x    x            |
     +-------------------------+
 ^
 s1

3. Pseudocode
----------------------------------------------------------------------
4. Code
----------------------------------------------------------------------
5. Big O
----------------------------------------------------------------------
Time:   O(m × n) where m = len(s1), n = len(s2)
Space:  O(m × n) for dp table; can be optimized to O(n)
    Memoization table → O(mn)
    Recursion call stack → at most O(m + n), but dominated by O(mn)
'''
class Solution:
    def minimumDeleteSum(self, s1: str, s2: str) -> int:
        @lru_cache(None)
        def dp(i, j):
            # If s1 is exhausted, delete all remaining characters in s2
            if i == len(s1):
                return sum(ord(c) for c in s2[j:])

            # If s2 is exhausted, delete all remaining characters in s1
            if j == len(s2):
                return sum(ord(c) for c in s1[i:])

            # Characters match, keep them and move on
            if s1[i] == s2[j]:
                return dp(i + 1, j + 1)

            # Characters differ → try deleting either one
            return min(
                ord(s1[i]) + dp(i + 1, j),     # delete from s1
                ord(s2[j]) + dp(i, j + 1)      # delete from s2
            )

        return dp(0, 0)

'''
----------------------------------------------------------------------
1. Understand

We still want the minimum ASCII delete sum needed to make s1 and s2 equal.
But instead of top-down recursion, we build a DP table bottom-up.

Key idea:
dp[i][j] = minimum ASCII delete sum to make
           s1[0 : i] and s2[0 : j] equal.

This means:
- i corresponds to s1[0..i-1]
- j corresponds to s2[0..j-1]

Base cases:
- dp[0][j]: s1 is empty → must delete all characters in s2[0..j-1]
- dp[i][0]: s2 is empty → must delete all characters in s1[0..i-1]

Transition:
If s1[i-1] == s2[j-1]:
    → No deletions needed for these characters
    → dp[i][j] = dp[i-1][j-1]

Else:
    → We must delete one of the two characters
    Option 1: delete s1[i-1]
        cost = ord(s1[i-1]) + dp[i-1][j]
    Option 2: delete s2[j-1]
        cost = ord(s2[j-1]) + dp[i][j-1]
    → Take the minimum

Answer is dp[m][n], where m=len(s1), n=len(s2).

----------------------------------------------------------------------
2. Diagram

Example:
s1 = "sea"
s2 = "eat"

We construct a (m+1)×(n+1) table:

        ''   e     a     t
     +------------------------+
 ''  | 0   e     e+a   e+a+t |
 s   | s   ?      ?      ?   |
 e   | s+e ?      ?      ?   |
 a   | s+e+a ?     ?      ?  |
     +------------------------+

dp[0][j] = ASCII sum of s2[0..j-1]
dp[i][0] = ASCII sum of s1[0..i-1]

Every dp[i][j] is computed from:
- dp[i-1][j] (delete from s1)
- dp[i][j-1] (delete from s2)
- dp[i-1][j-1] (if characters match)

----------------------------------------------------------------------
3. Pseudocode

Let m = len(s1), n = len(s2)
Create dp array of size (m+1) × (n+1)

for i from 1 to m:
    dp[i][0] = dp[i-1][0] + ASCII(s1[i-1])

for j from 1 to n:
    dp[0][j] = dp[0][j-1] + ASCII(s2[j-1])

for i from 1 to m:
    for j from 1 to n:
        if s1[i-1] == s2[j-1]:
            dp[i][j] = dp[i-1][j-1]
        else:
            dp[i][j] = min(
                ASCII(s1[i-1]) + dp[i-1][j],
                ASCII(s2[j-1]) + dp[i][j-1]
            )

return dp[m][n]


----------------------------------------------------------------------
4. Code

----------------------------------------------------------------------
5. Big O

Time:  O(m × n)
       We fill an m×n table, each entry computed in O(1).

Space: O(m × n)
       For the DP table dp.

Optimization:
Because each dp[i][j] only needs dp[i-1][*] and dp[i][*],
we can reduce space to O(n) with a rolling 1D array.

'''
class Solution:
    def minimumDeleteSum(self, s1: str, s2: str) -> int:
        m, n = len(s1), len(s2)
        dp = [[0] * (n + 1) for _ in range(m + 1)]

        # Base case: s2 is empty → delete all characters from s1
        for i in range(1, m + 1):
            dp[i][0] = dp[i - 1][0] + ord(s1[i - 1])

        # Base case: s1 is empty → delete all characters from s2
        for j in range(1, n + 1):
            dp[0][j] = dp[0][j - 1] + ord(s2[j - 1])

        # Fill the DP table
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if s1[i - 1] == s2[j - 1]:
                    # Characters match → no deletion needed
                    dp[i][j] = dp[i - 1][j - 1]
                else:
                    # Characters differ → delete one of them
                    dp[i][j] = min(
                        ord(s1[i - 1]) + dp[i - 1][j],  # delete from s1
                        ord(s2[j - 1]) + dp[i][j - 1]  # delete from s2
                    )

        return dp[m][n]
