'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:   O(coinsⁿ)
Space:  O(n)   (recursion stack)
'''
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        def dfs(rem):
            if rem == 0:
                return 0
            if rem < 0:
                return float("inf")

            ans = float("inf")
            for coin in coins:
                ans = min(ans, 1 + dfs(rem - coin))

            return ans

        res = dfs(amount)
        return res if res != float("inf") else -1
'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:   O(n * amount)
Space:  O(n)   (memo + recursion stack)
'''
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        memo = {}

        def dp(rem):
            if rem == 0:
                return 0
            if rem < 0:
                return float("inf")
            if rem in memo:
                return memo[rem]

            ans = float("inf")
            for coin in coins:
                ans = min(ans, 1 + dp(rem - coin))

            memo[rem] = ans
            return ans

        res = dp(amount)
        return res if res != float("inf") else -1
'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:   O(len(coins) * amount)
Space:  O(amount)
'''
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [amount+1] * (amount+1)
        dp[0] = 0
        for a in range(1, amount+1):
            for c in coins:
                if a - c >= 0:
                    dp[a] = min(dp[a], dp[a-c]+1)
        return dp[amount] if dp[amount] != amount+1 else -1
'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:   O(len(coins) * amount)
Space:  O(amount)
'''
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [float("inf")] * (amount + 1)
        dp[0] = 0

        for coin in coins:
            for a in range(coin, amount + 1):
                dp[a] = min(dp[a], dp[a - coin] + 1)

        return dp[amount] if dp[amount] != float("inf") else -1
