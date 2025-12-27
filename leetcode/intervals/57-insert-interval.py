'''
1. Understand
Greedy.

2. Diagram

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18 
[     ]
               [        ]
   [        ]
5. BigO
Time:   O(nlogn)
Space:  O(n)
'''

class Solution:
    def insert(self, intervals: List[List[int]], n: List[int]) -> List[List[int]]:
        res = []

        for i, cur in enumerate(intervals):
            # Case 1: new interval ends before the current interval starts
            # No overlap is possible anymore, so we can insert `n`
            # and append the remaining intervals as-is.
            if n[1] < cur[0]:
                res.append(n)
                return res + intervals[i:]

            # Case 2: current interval ends before new interval starts
            # They do not overlap, so we keep the current interval.
            elif cur[1] < n[0]:
                res.append(cur)

            # Case 3: overlapping intervals
            # Merge current interval into `n`
            else:
                n = [min(n[0], cur[0]), max(n[1], cur[1])]

        # If we never returned early, insert the merged `n` at the end
        res.append(n)
        return res
