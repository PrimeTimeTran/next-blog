'''
1. Understand
Greedy.

2. Diagram

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]

1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18 
[    ]
   [           ]
                     [     ]
                                               [           ]
5. BigO
Time:   O(nlogn)
Space:  O(n)
'''
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # Sort intervals by start time so overlaps appear next to each other
        intervals.sort()

        # Initialize result with the first interval
        res = [intervals[0]]

        for start, end in intervals:
            # End of the last interval in the merged result
            cur_end = res[-1][1]

            # If the current interval starts after the last merged interval ends,
            # there is no overlap, so we can safely add it as a new interval.
            if cur_end < start:
                res.append([start, end])
            else:
                # Overlapping intervals:
                # Merge by extending the end of the last interval to the furthest end
                res[-1][1] = max(cur_end, end)

        return res
