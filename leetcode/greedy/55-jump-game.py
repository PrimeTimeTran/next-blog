'''
1. Understand
Greedy. 
Greedy Choice Property:
At each index i, we always choose to extend our farthest reachable position
as much as possible (f = max(f, i + nums[i])). This local choice is optimal
because if we can't reach index i, we can't reach the end from any previous index.

Optimal Substructure:
The problem has optimal substructure because the ability to reach the end from
index i depends only on whether we can reach or extend to later indices. If we
can reach index i and from i we can reach the end, then the solution for the
subarray nums[i:] is valid and contributes to the solution of the whole array.

5. Big O
Time:   O(n) where n is the length of nums
Space:  O(1) because we keep a single variable to track the farthest index we can reach
'''
class Solution:
    def canJump(self, nums):
        f = 0  
        for i, n in enumerate(nums):
            if f < i:
                return False
            f = max(f, i + n)
        return True
