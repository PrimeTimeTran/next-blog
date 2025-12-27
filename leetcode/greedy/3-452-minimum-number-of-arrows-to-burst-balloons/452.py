'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time:  O(N log N) due to sorting the points.
Space: O(1) for the variables used.
'''
class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        points.sort(key = lambda x: x[1])
        c, cur_end = 1, points[0][1]
        for start, end in points:
            if cur_end < start:
                c+=1
                cur_end = end
        return c
