'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time:  O()
Space: O()
'''
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        low, res = 0, 0
        for i, price in enumerate(prices):
            profit = price - prices[low]
            if price < prices[low]: low = i
            res = max(res, profit)
        return res
'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time:  O()
Space: O()
'''
