'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
n = len(coins)
Time:   O(amount * n)
Space:  O(amount * n)
'''
class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        from functools import lru_cache

        @lru_cache(None)
        def dp(i, remaining):
            # If exact change achieved
            if remaining == 0:
                return 1
            # If out of coins OR remaining negative
            if i == len(coins) or remaining < 0:
                return 0

            # Option 1: don't take coin i
            skip = dp(i + 1, remaining)
            # Option 2: take coin i (unbounded)
            take = dp(i, remaining - coins[i])

            return skip + take

        return dp(0, amount)
'''
1. Understand
dp[j] = number of ways to make amount j

2. Diagram
amount = 5, coins = [1,2,5]

Initial:
        [1, 0, 0, 0, 0, 0]
------------------------------------------------------------
coin = 1,  j = 1:
        [1, 1, 0, 0, 0, 0]
coin = 1,  j = 2:
        [1, 1, 1, 0, 0, 0]
coin = 1,  j = 3:
        [1, 1, 1, 1, 0, 0]
coin = 1,  j = 4:
        [1, 1, 1, 1, 1, 0]
coin = 1,  j = 5:
        [1, 1, 1, 1, 1, 1]
------------------------------------------------------------
coin = 2,  j = 2:
        [1, 1, 2, 1, 1, 1]
coin = 2,  j = 3:
        [1, 1, 2, 2, 1, 1]
coin = 2,  j = 4:
        [1, 1, 2, 2, 3, 1]
coin = 2,  j = 5:
        [1, 1, 2, 2, 3, 3]
------------------------------------------------------------
coin = 5,  j = 5:
        [1, 1, 2, 2, 3, 4]

[1, 0, 0, 0, 0, 0]
[1, 1, 0, 0, 0, 0]
[1, 1, 1, 0, 0, 0]
[1, 1, 1, 1, 0, 0]
[1, 1, 1, 1, 1, 0]
[1, 1, 1, 1, 1, 1]
[1, 1, 2, 1, 1, 1]
[1, 1, 2, 2, 1, 1]
[1, 1, 2, 2, 3, 1]
[1, 1, 2, 2, 3, 3]
[1, 1, 2, 2, 3, 4]

3. Pseudocode
4. Code
5. Big O
Time:   O(amount * len(coins))
Space:  O(amount)
'''
class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        dp, dp[0] = [0] * (amount + 1), 1
        for coin in coins:
            # "To form j, add all ways that formed j - coin and then append this coin."
            for j in range(coin, amount + 1):
                dp[j] += dp[j - coin]
        return dp[amount]
