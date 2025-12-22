'''
1. Understand
Return an int representing the maximum profit you can make making at most k transactions.
DP because it's asking to find the best given the constraint k from a list of subproblems.

2. Diagram
3. Pseudocode
4. Code
5. Big O
Time:   O(nk)
Space:  O(nk)
'''
class Solution:
    def maximumProfit(self, prices: List[int], k: int) -> int:
        n = len(prices)
        @lru_cache(1000*4)
        # 0 = None
        # 1 = buy_to_open
        # 2 = sell_to_open
        def dp(i, position, completed_count):
            if i == n or completed_count == k:
                return 0 if position is None else -inf
            price = prices[i]
            i+=1
            skip = dp(i, position, completed_count)
            # Open position needs closing.
            if position:
                # I bought to open so I now credit a sell to close.
                # Otherwise I sold to open so I now debit a buy to close.
                realized = price if position == 1 else -price
                act = realized + dp(i, None, completed_count+1)
            else:
                # No position means we have to ask a question.
                # What is more profitable, shorting or longing today's price?
                act = max(
                    dp(i, 1, completed_count) - price,
                    dp(i, 2, completed_count) + price
                )
            return max(skip, act)
        return dp(0, None, 0)


class Solution:
    def maximumProfit(self, prices: List[int], k: int) -> int:
        n = len(prices)

        @lru_cache(maxsize=1000*4)
        def dp(i, kount, holding):
            if i == n or kount == k:
                return 0 if holding is None else -inf
            price = prices[i]
            i+=1
            skip = dp(i, kount, holding)
            if holding:
                sign = 1 if holding == "sell_to_open" else -1
                pnl_from_close = sign * price
                pnl_today_included = pnl_from_close + dp(i, kount+1, None)
            else:
                pnl_today_included = max(
                    dp(i, kount, "buy_to_open") + price,
                    dp(i, kount, "sell_to_open") - price,
                )
            return max(skip, pnl_today_included)
        return dp(0, 0, False)
