'''
011
100
---
111  -> 3 differing bits

There are multiple ways to calculate the total Hamming distance.
One way is to use a brute-force approach by generating all unique pairs of numbers,
calculating the Hamming distance for each pair using XOR operation, and summing them up.
'''

# Logic correct but TLE on large inputs
# class Solution:
#     def totalHammingDistance(self, nums: List[int]) -> int:
#         combos = []
#         def dp(cur, path):
#             if len(path) == 2: return combos.append(path)
#             for i in range(len(cur)):
#                 dp(cur[i+1:], [cur[i]]+path)
#         dp(nums, [])
#         return sum(
#             self.hammingDistance(a, b)
#             for a, b in combos
#         )

#     def hammingDistance(self, n1, n2):
#         n = n1 ^ n2
#         res = 0
#         while n:
#             res+=1
#             n &= n - 1
#         return res



'''
Hamming distance is additive per bit position
Instead of comparing numbers pairwise, compare them bitwise across the whole array.

'''

class Solution:
    def totalHammingDistance(self, nums: List[int]) -> int:
        res = 0
        n = len(nums)

        for bit in range(32):
            ones = 0
            for num in nums:
                ones += (num >> bit) & 1
            zeros = n - ones
            res += ones * zeros

        return res
