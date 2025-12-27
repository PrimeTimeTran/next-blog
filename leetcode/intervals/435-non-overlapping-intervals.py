'''
1. Understand
Greedy.

2. Diagram

1  2  3  4  5
[  ]
   [  ]
      [  ]
[     ]
5. Big O
Time:   O(nlogn)
Space:  O(1)
'''
class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort()
        c, cur_end = 0, -inf

        for start, end in intervals:
            # If the previous kept interval ends before or at
            # the start of this interval, they do not overlap.
            # Keep this interval and update cur_end.
            if cur_end <= start:
                cur_end = end
            else:
                # Overlapping intervals: we must remove one.
                # Greedy choice: keep the interval with the smaller end
                # to maximize room for future intervals.
                c += 1
                cur_end = min(cur_end, end)

        return c
