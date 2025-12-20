'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time:  O(N log N) due to sorting the intervals.
Space: O(1) or O(N) depending on the sorting algorithm used.
'''
class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort()
        res = 0 
        prev_end = intervals[0][1]
        for i in range(1, len(intervals)):
            start, new_end = intervals[i]
            if prev_end <= start:
                prev_end = new_end
            else:
                res += 1
                prev_end = min(prev_end, new_end)
        
        return res

'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time:  O()
Space: O()
'''
