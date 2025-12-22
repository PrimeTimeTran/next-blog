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
        nums.sort()
        n = len(nums)

        # Counting ALL pairs of numbers with a distance <= than D
        def count_pairs(D):
            j = count = 0
            # That's why we need the nested loop, because pairing at (i, j)
            # isn't the same as pairing at (i+1, j)
            # j is not reset because distances only grow as i increases
            for i in range(n):
                # Crux ⭐️:  
                # Move j to the first index where the distance exceeds D.
                # All indices in (i, j) form valid pairs with i.
                # After the while-loop, j is the smallest index such that
                # nums[j] - nums[i] > D.
                while j < n and nums[j] - nums[i] <= D:
                    j += 1
                count += j - i - 1
            return count
        
        # R is the max possible distance between two pairs
        # because we took the max num and subtracted the min num.
        # Range of distances between any two numbers is [0, r]
        l, r = 0, nums[-1] - nums[0]
        # Grow/Shrink distance(m) until l < r
        while l < r:
            m = (l + r) // 2
            # At least k pairs fit within distance m → try a smaller distance
            if count_pairs(m) >= k:
                r = m
            else:
                # Not enough pairs → distance too small → increase lower bound
                l = m + 1
        return r
