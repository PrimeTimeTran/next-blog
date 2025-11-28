'''
1. Understand
   Given a sorted array of integers and a target value, 
   find the starting and ending indexes of the target value.
   
   This problem must be solved in O(log n) time complexity.
   
   The trick is to use binary search twice for both indexes(first and last).
   
   Because the array is sorted, we can use binary search to find the first occurrence
   of the target by converging toward the index where the midpoint number is
   greater than or equal to the target.
   Similarly, we can find the last occurrence by converging toward the index
   where the midpoint number is less than or equal to the target.

2. Diagram
   [5,7,7,8,8,10], target = 8
   [5,7,7,8,8,10], target = 6
3. Pseudocode
4. Code
5. BigO
   Time: O()
   Space: O()
'''


class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if not nums: return [-1, -1]
        l, r = 0, len(nums) - 1
        # Find the left boundary:
        # converge toward the first index where nums[i] >= target
        while l < r:
            m = (l+r) // 2
            if nums[m] < target:
                l = m + 1
            else:
                r = m
        if nums[l] != target: return [-1, -1]
        idxFirst = l
        l, r = 0, len(nums)-1
        # Find the right boundary:
        # converge toward the last index where nums[i] <= target
        while l < r:
            m = (l+r+1) // 2        
            if nums[m] > target:
                r = m - 1 
            else:
                l = m
        idxLast = r
        return [idxFirst, idxLast]
