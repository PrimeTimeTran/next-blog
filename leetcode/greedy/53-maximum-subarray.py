'''
1. Understand
Greedy.

5. Big O
Time:   O()
Space:  O()
'''
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        res, cur = nums[0], 0
        for n in nums:
            if cur < 0:
                cur = 0
            cur += n
            res = max(res, cur)
        return res
