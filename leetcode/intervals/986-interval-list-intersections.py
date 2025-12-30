'''
1. Understand
Two-pointer sweep over two sorted interval lists.

At each step, compare one interval from each list:
- Compute their intersection, if it exists
- Move forward the pointer of the interval that ends first,
  since it cannot overlap with any future interval.

This efficiently exhausts both lists while collecting all intersections.

5. Big O
Time:   O(n + m)
Space:  O(1) extra (excluding output)
'''
class Solution:
    def intervalIntersection(self, l1: List[List[int]], l2: List[List[int]]) -> List[List[int]]:
        res = []
        i = j = 0
        while i < len(l1) and j < len(l2):
            # The intersection cannot begin before both intervals have started.
            # Therefore, the earliest possible start is the later of the two starts:
            start = max(l1[i][0], l2[j][0])
            # The intersection cannot extend past either interval’s end.
            # Therefore, the latest possible end is the earlier of the two ends:
            end = min(l1[i][1], l2[j][1])
            if start <= end:
                res.append([start, end])

            # Which interval is guaranteed to be useless for any future intersection.
            if l1[i][1] < l2[j][1]:
                i += 1
            else:
                j += 1
        return res
