'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
n = len(coins)
Time:   O(amount × n)
Space:  O(amount)
'''
class Solution:
    def coinChange(self, coins, amount):
        memo = {}
        def dp(rem):
            if rem == 0:
                return 0
            if rem < 0:
                return float('inf')
            if rem in memo:
                return memo[rem]
            best = float('inf')
            for c in coins:
                best = min(best, dp(rem-c)+1)
            memo[rem] = best
            return best

        res = dp(amount)
        return res if res != float('inf') else -1
'''
1. Understand
2. Diagram

DP Table:
[ 0,  12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]
[ 0,   1, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]
[ 0,   1,  1, 12, 12, 12, 12, 12, 12, 12, 12, 12]
[ 0,   1,  1,  2, 12, 12, 12, 12, 12, 12, 12, 12]
[ 0,   1,  1,  2,  2, 12, 12, 12, 12, 12, 12, 12]
[ 0,   1,  1,  2,  2,  1, 12, 12, 12, 12, 12, 12]
[ 0,   1,  1,  2,  2,  1,  2, 12, 12, 12, 12, 12]

3. Pseudocode
4. Code
5. Big O
Time:   O(amount × n)
Space:  O(amount)
'''
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [float('inf')] * (amount+1)
        dp[0] = 0
        for a in range(1, amount+1):
            for c in coins:
                if a - c >= 0:
                    dp[a] = min(dp[a], dp[a-c]+1)
        return dp[amount] if dp[amount] != float('inf') else -1
