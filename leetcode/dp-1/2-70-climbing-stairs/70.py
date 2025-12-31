"""
Time:   O(2ⁿ)
Space:  O(n)   (recursion stack)

aₙ   = aₙ₋₁ + aₙ₋₂
aₙ₋₁ = aₙ₋₂ + aₙ₋₃
aₙ₋₂ = aₙ₋₃ + aₙ₋₄
aₙ₋₃ = aₙ₋₄ + aₙ₋₅
...
a₃ = 3
a₂ = 2
a₁ = 1
a₀ = 0

                                dfs(n)
                               /      \
                        dfs(n-1)      dfs(n-2)
                        /     \        /     \
               dfs(n-2)   dfs(n-3)  dfs(n-3)  dfs(n-4)
                /   \       /   \     /   \     /   \
        dfs(n-3) dfs(n-4) ...   ...  ...  ...   ...  ...
           / \
   dfs(n-4) dfs(n-5)
        ...
"""
class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2: return n
        return self.climbStairs(n-1) + self.climbStairs(n-2)

"""
Time:   O(n)
Space:  O(n)   (memo + recursion stack)

                              dp(n)
                             /     \
                    dp(n-2)         dp(n-1)
                     /   \             /    \
            dp(n-4)   dp(n-3)    dp(n-3)   dp(n-2)
              ...       ...         |         |
                                    |         |
                            (memo hit)   (memo hit)
"""


class Solution:
    def climbStairs(self, n: int) -> int:
        memo = {}
        def dp(i):
            if i <= 2:
                return i
            if i not in memo:
                memo[i] = dp(i-2) + dp(i-1)
            return memo[i]
        return dp(n)


"""
Time:   O(n)
Space:  O(n)

i:     0  1  2  3  4  5
dp 0: [0, 0, 0, 0, 0, 0]
dp 1: [0, 1, 0, 0, 0, 0]
dp 2: [0, 1, 2, 0, 0, 0]
dp 3: [0, 1, 2, 3, 0, 0]
dp 4: [0, 1, 2, 3, 5, 0]
dp 5: [0, 1, 2, 3, 5, 8]
dp n: [0, 1, 2, 3, 5, 8, ...]

"""
class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2: return n
        dp = [0]*(n+1)
        dp[1] = 1
        dp[2] = 2
        for i in range(3, n+1):
            dp[i] = dp[i-2] + dp[i-1]
        return dp[n]

class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2:
            return n
        prior, prev = 1, 2
        for _ in range(3, n+1):
            prior, prev = prev, prev+prior
        return prev
