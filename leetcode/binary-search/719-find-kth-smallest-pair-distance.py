'''
1. Understand
We slide a distance window from 0 upward and ask: “Have I seen k pairs yet?” — binary search just speeds that up.

Question:
“What is the k-th smallest distance?”
Better Question:
“How many pairs have distance ≤ D?”

Key invariant (burn this into memory)

- count_pairs(D) = number of pairs with distance ≤ D
- That number never decreases as D increases
- We binary search the first distance where count ≥ k
'''
class Solution:
    def smallestDistancePair(self, nums: List[int], k: int) -> int:
        nums.sort(); n = len(nums)
        def count_pairs(D):
            j = count = 0
            for i in range(n):
                while j < n and nums[j] - nums[i] <= D: j += 1
                count += j - i - 1
            return count
        l, r = 0, nums[-1] - nums[0]
        while l < r:
            m = (l + r) // 2
            if count_pairs(m) >= k:
                r = m
            else:
                l = m + 1
        return r
