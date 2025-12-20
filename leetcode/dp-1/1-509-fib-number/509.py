"""
aₙ   = aₙ₋₁ + aₙ₋₂
aₙ₋₁ = aₙ₋₂ + aₙ₋₃
aₙ₋₂ = aₙ₋₃ + aₙ₋₄
aₙ₋₃ = aₙ₋₄ + aₙ₋₅
...
a₄ = 3
a₃ = 2
a₂ = 1
a₁ = 1
a₀ = 0
"""

"""
Time:   O(2^n)
Space:  O(n)   (recursion stack)
                                 fib(n)
                                /      \
                           fib(n-1)    fib(n-2)
                           /     \        /     \
                    fib(n-2)  fib(n-3) fib(n-3) fib(n-4)
                     /   \       /   \     /   \     /   \
              fib(n-3) fib(n-4) ...   ...  ...  ...   ...  ...
               / \
        fib(n-4) fib(n-5)
             ...
"""

class Solution:
    def fib(self, n: int) -> int:
        def dp(i):
            if i <= 1:
                return i
            return dp(i-1) + dp(i-2)
        return dp(n)
"""
Time:   O(n)
Space:  O(n)   (memo + recursion stack)

                               dp(n)
                              /      \
                       dp(n-1)        dp(n-2)
                       /     \        /      \
               dp(n-2)     dp(n-3)  dp(n-3)   dp(n-4)
                /   \        /   \    |         |
        dp(n-3) dp(n-4) dp(n-4) dp(n-5) (cache hit) (cache hit)
          |        |        |       |
      dp(2)     dp(1)    (cache hit) (cache hit)
       |          |
   base=2 → cache store
              base=1 → cache store
"""
class Solution:
    def fib(self, n: int) -> int:
        memo = {}
        def dp(i):
            if i <= 1:
                return i
            if i not in memo:
                memo[i] = dp(i-1) + dp(i-2)
            return memo[i]
        return dp(n)
"""
Time:   O(n)
Space:  O(n)

i:     0  1  2  3  4  5
dp 0: [0, 0, 0, 0, 0, 0]
dp 1: [0, 1, 0, 0, 0, 0]
dp 2: [0, 1, 1, 0, 0, 0]
dp 3: [0, 1, 1, 2, 0, 0]
dp 4: [0, 1, 1, 2, 3, 0]
dp 5: [0, 1, 1, 2, 3, 5]

Each iteration uses the previous two table entries.
"""
class Solution:
    def fib(self, n: int) -> int:
        if n <= 1:
            return n

        dp = [0] * (n+1)
        dp[0] = 0
        dp[1] = 1
        for i in range(2, n+1):
            dp[i] = dp[i-1] + dp[i-2]
        return dp[n]
"""
Time:   O(n)
Space:  O(1)
"""
class Solution:
    def fib(self, n: int) -> int:
        if n <= 1:
            return n
        prior, prev = 0, 1
        for _ in range(2, n+1):
            prior, prev = prev, prev + prior
        return prev
