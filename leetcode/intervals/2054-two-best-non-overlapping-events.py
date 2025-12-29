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


Why DP:
A natural alternative is greedy — for example, always picking the highest-value event first. However, 
that fails because the highest-value event may span a long time range and prevent us from selecting a second event, 
even when two smaller-value non-overlapping events together yield a higher total. Since local choices affect future 
feasibility, the problem lacks the greedy-choice property, which is why a DP approach is appropriate.

“We can’t know that a locally best event preserves the possibility of an optimal second choice.”

2. Optimization
Binary search allows us to efficiently find the next non-overlapping
event instead of scanning linearly.

5. Big O
Time:   O(n log n)
Space:  O(n)
'''
from bisect import bisect_right
from functools import lru_cache


class Solution:
    def maxTwoEvents(self, events: List[List[int]]) -> int:
        events.sort()
        n, starts = len(events), [s for s, _, _ in events]
        @lru_cache(None)
        def dp(i, pluck):
            if i == n or pluck == 2:
                return 0
            skip = dp(i+1, pluck)
            _, e, v = events[i]
            j = bisect_right(starts, e)
            pick = v + dp(j, pluck+1)
            return max(skip, pick)
        return dp(0, 0)
