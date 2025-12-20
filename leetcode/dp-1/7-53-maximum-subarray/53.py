class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        cur, ans = 0, nums[0]
        for n in nums:
            if cur < 0:
                cur = 0
            cur += n
            ans = max(cur, ans)
        return ans
