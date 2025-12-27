from typing import (
    List,
)
from lintcode import (
    Interval,
)

class Solution:
    def can_attend_meetings(self, intervals: List[Interval]) -> bool:
        intervals.sort(key= lambda x : x.start)
        for i in range(1, len(intervals)):
            m1 = intervals[i-1]
            m2 = intervals[i]
            if m2.start < m1.end:
                return False
        return True

class Solution:
    def can_attend_meetings(self, intervals: List[Interval]) -> bool:
        intervals.sort(key=lambda x: x.start)
        return all(intervals[i].start >= intervals[i-1].end
                   for i in range(1, len(intervals)))
