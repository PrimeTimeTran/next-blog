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
        events = []
        for p, start, end in trips:
            events.append((start, p))   # pick up passengers
            events.append((end, -p))    # drop off passengers
        # Sort by time; drop-offs happen before pick-ups at same time
        events.sort()
        cur = 0
        for _, delta in events:
            cur += delta
            if cur > capacity:
                return False
        return True
