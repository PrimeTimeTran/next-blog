'''
1. Understand
Key Insight:
- In a rotated sorted array, the min el is the only el where the previous el is greater than it (or equivalently, it’s the “pivot point”).
- Another way to think: the minimum is always in the unsorted half of the current search range.

If nums[m] < nums[r] == true then the range [m+1, r] cannot contain a minimum, because of the 
"original sorting" attribute. So we should check the range [l, m] because this will definitely contain it.
'''
class Solution:
    def findMin(self, nums: List[int]) -> int:
        l, r = 0, len(nums)-1
        while l < r:
            m = (l+r) // 2
            # If the right partition is sorted than it does not contain
            # the drop point(where the largest number drops to the lowest/circles back to the beginning).
            # So discard the right half.
            if nums[m] < nums[r]:
                r = m
            else:
                # The right partition wasn't sorted so the left can be discarded
                l = m + 1
        return nums[r]
