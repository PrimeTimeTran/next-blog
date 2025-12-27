'''
1. Understand
Dynamic Programming + Binary Search.

We sort events by start time. At each index `i`, we decide whether to:
- Skip the current event
- Taking an event restricts the remaining choices to non-overlapping events, 
  and the DP optimizes over that reduced set.

The DP state is:
dp(i, k) = maximum value obtainable starting from index `i`
           after having taken `k` events so far (k <= 2)

We stop recursion once we have taken 2 events or reached the end.

2. Optimization
Binary search allows us to efficiently find the next non-overlapping
event instead of scanning linearly.

5. Big O
Time:   O(n log n)
Space:  O(n)
'''
class Solution:
    def maxTwoEvents(self, events: List[List[int]]) -> int:
        n = len(events)
        events.sort()
        starts = [s for s, _, _ in events]
        @lru_cache(None)
        def dp(i, pluck):
            if pluck == 2 or i == n:
                return 0
            _, e, v = events[i]
            j = bisect_right(starts, e)
            skip = dp(i + 1, pluck)
            pick = v + dp(j, pluck + 1)
            return max(skip, pick)
        return dp(0, 0)
