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
        @lru_cache(maxsize=1000*4)
        def dp(i: int, completed_transactions: int, position: str):
            if i == len(prices) or completed_transactions == k:
                return 0 if position is None else -inf
            p = prices[i]
            i+=1
            # Open position we need to close
            if position:
                sign = -1 if position == "sell_to_open" else 1
                pnl_today = sign * p
                # Unrealized is a finance misnomer
                # because we haven't opened a position to realize.
                # However from a programming perspective it is unrealized
                # because we haven't yet computed the potential P & L in future days.
                pnl_unrealized = dp(i, completed_transactions + 1, None)
                pnl_today_included = pnl_today + pnl_unrealized
            else:
                # We haven't opened a position yet so lets figure out 
                # what could happen if we either sold or bought today.
                pnl_today_included = max(
                    dp(i, completed_transactions, "sell_to_open") + p,
                    dp(i, completed_transactions, "buy_to_open") - p,
                )
            # What happens when we skip today?
            pnl_today_skipped = dp(i, completed_transactions, position)

            # Between skipping today and including it(buy or sell) what maximizes our profit?
            return max(pnl_today_skipped, pnl_today_included)
        return dp(0, 0, None)
