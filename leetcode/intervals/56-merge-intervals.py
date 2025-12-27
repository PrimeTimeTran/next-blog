class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort()
        res = [intervals[0]]
        for i in range(1, len(intervals)):
            cur = intervals[i]
            prev = res[-1]
            if prev[1] < cur[0]:
                res.append(cur)
            else:
                res[-1][1] = max(cur[1], prev[1])
        return res
