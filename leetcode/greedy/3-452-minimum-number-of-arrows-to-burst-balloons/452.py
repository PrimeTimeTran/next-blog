'''
1. Understand
Sort the points based on their end coordinates. 
Initialize the count of arrows needed to 1 and set the current arrow position to the 
end of the first balloon. Iterate through the sorted balloons, and for each balloon, check 
if its start coordinate is greater than the current arrow position. If it is, 
increment the arrow count and update the current arrow position to the end of the current 
balloon. Finally, return the total count of arrows needed.

2. Diagram

3. Pseudocode
4. Code
5. Big O
Time:  O(N log N) due to sorting the points.
Space: O(1) for the variables used.
'''
class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        n, c = len(points), 1
        if n == 0: return 0
        
        points.sort(key = lambda x: x[1])
        cur = points[0]
        for i in range(n):
            if cur[1] < points[i][0]:
                c += 1
                cur = points[i]
        return c
'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time:  O()
Space: O()
'''
