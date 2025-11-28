class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        nums = [int(num) for num in str(n)]
        product = 1
        for num in nums:
            product *= num
        return product - sum(nums)
