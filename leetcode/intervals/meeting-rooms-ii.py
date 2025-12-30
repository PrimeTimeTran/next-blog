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


class Solution:
    def min_meeting_rooms(self, intervals: List[Interval]) -> int:
        events = []
        for cur in intervals:
            events.append((cur.start, +1))
            events.append((cur.end, -1))

        events.sort()
        cur = res = 0

        for _, delta in events:
            cur += delta
            res = max(res, cur)

        return res
