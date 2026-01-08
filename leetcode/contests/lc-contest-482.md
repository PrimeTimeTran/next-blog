- Automata Theory
- Discrete Mathematics
- Algorithms (Advanced / Specialized)
- Digit DP?
  - https://codeforces.com/blog/entry/53960

https://leetcode.com/contest/weekly-contest-482/problems/maximum-score-of-a-split

```py
class Solution:
    def maximumScore(self, nums: List[int]) -> int:
        n = len(nums)
        prefix = [0] * n
        prefix[0] = nums[0]
        for i in range(1, n):
            prefix[i] = prefix[i-1] + nums[i]
        suffix_min = [0] * n
        suffix_min[-1] = nums[-1]
        for i in range(n-2, -1, -1):
            suffix_min[i] = min(nums[i], suffix_min[i+1])
        max_score = -inf
        for i in range(n-1):
            score = prefix[i] - suffix_min[i+1]
            max_score = max(max_score, score)

        return max_score
```

https://leetcode.com/contest/weekly-contest-482/problems/minimum-cost-to-acquire-required-items

```py
class Solution:
    def minimumCost(self, cost1, cost2, costBoth, need1, need2):
        candidates = [0, need1, need2, min(need1, need2)]
        res = inf
        for x in candidates:
            total = x * costBoth + max(0, need1 - x) * cost1 + max(0, need2 - x) * cost2
            res = min(res, total)
        return res
```

https://leetcode.com/contest/weekly-contest-482/problems/smallest-all-ones-multiple

```py
def is_all_ones_decimal(n: int) -> bool:
    if n <= 0:
        return False
    return all(c == '1' for c in str(n))

class Solution:
    def minAllOneMultiple(self, k: int) -> int:
        if k == 1:
            return 1
        mod = 1 % k
        length = 1
        seen = set()
        while mod != 0:
            if mod in seen:
                return -1
            seen.add(mod)
            mod = (mod * 10 + 1) % k
            length += 1
        return length
```

https://leetcode.com/contest/weekly-contest-482/problems/number-of-balanced-integers-in-a-range

```py
class Solution:
    def countBalanced(self, low: int, high: int) -> int:
        # Count balanced numbers of EXACT length L within [lo, hi]
        # We fix length because odd/even positions depend on total digit count
        def count_len_range(lo: int, hi: int, L: int) -> int:
            # Pad bounds so we can process digits position-by-position
            # This lets us use prefix constraints cleanly
            lo_str = str(lo).zfill(L)
            hi_str = str(hi).zfill(L)

            @lru_cache(None)
            def dfs(pos, diff, tight_lo, tight_hi):
                """
                pos       : current digit position (0-based, left to right)
                diff      : (sum of digits at odd positions) - (sum at even positions)
                tight_lo  : whether prefix so far is still equal to lower bound
                tight_hi  : whether prefix so far is still equal to upper bound

                Returns number of valid completions from this state.
                """

                # If all digits are chosen, check if invariant holds
                if pos == L:
                    return int(diff == 0)

                # Determine allowed digit range at this position
                # If still tight to a bound, we must respect that bound's digit
                lo_d = int(lo_str[pos]) if tight_lo else 0
                hi_d = int(hi_str[pos]) if tight_hi else 9

                total = 0

                # Try all valid digits at this position
                for d in range(lo_d, hi_d + 1):

                    # We remain tight only if we exactly match the boundary digit
                    ntl = tight_lo and d == lo_d
                    nth = tight_hi and d == hi_d

                    # Update the invariant:
                    # even pos (0-based) -> odd position in number -> add digit
                    # odd pos           -> even position           -> subtract digit
                    if pos % 2 == 0:
                        total += dfs(pos + 1, diff + d, ntl, nth)
                    else:
                        total += dfs(pos + 1, diff - d, ntl, nth)

                return total

            # Start from position 0, zero balance, fully constrained by bounds
            return dfs(0, 0, True, True)

        res = 0

        # Numbers of different digit lengths have different odd/even layouts,
        # so we must process each possible length separately
        len_low = len(str(low))
        len_high = len(str(high))

        for L in range(len_low, len_high + 1):

            # Restrict range to numbers with exactly L digits
            lo = max(low, 10**(L - 1))
            hi = min(high, 10**L - 1)

            if lo <= hi:
                res += count_len_range(lo, hi, L)

        return res
```
