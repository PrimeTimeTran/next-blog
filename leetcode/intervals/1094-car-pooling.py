'''
1. Understand
Sweep line / difference array (event simulation)
But it does not make choices between alternatives.

A greedy algorithm must:
- Make a choice at each step
- Choose among competing options
- Rely on the greedy-choice property
'''
class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        cur, events = 0, []
        for n, start, end in trips:
            events.append([start, n])
            events.append([end, -n])
        events.sort()
        for _, delta in events:
            cur += delta
            if cur > capacity:
                return False
        return True
