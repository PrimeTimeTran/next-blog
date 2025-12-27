from typing import (
    List,
)
from lintcode import (
    Interval,
)

class Solution:
    def min_meeting_rooms(self, intervals: List[Interval]) -> int:
        end = sorted([i.end for i in intervals])
        start = sorted([i.start for i in intervals])
        s = e = res = count = 0
        while s < len(intervals):
            if start[s] < end[e]:
                s+=1
                count +=1
            else:
                e+=1
                count-=1
            res = max(res, count)
        return res
