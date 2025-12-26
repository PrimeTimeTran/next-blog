class Solution:
    def rob(self, nums: List[int]) -> int:
        def dp(vals):
            prior = prev = 0
            for n in vals:
                prior, prev = prev, max(prior+n, prev)
            return prev
        return max(dp(nums[1:]), dp(nums[:-1]), dp([nums[0]]))
