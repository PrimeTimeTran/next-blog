'''
1. Understand
Greedy algorithm to find the minimum number of jumps to reach the last index.
We always jump to the farthest reachable position within the current "range" 
before making the next jump.

Greedy Choice Property:
At each step, we choose to jump to the farthest reachable index within the 
current range [l, r]. This local choice is optimal because it maximizes 
progress and minimizes the number of jumps. Choosing any shorter jump would
not reduce the number of jumps needed to reach the end.

Optimal Substructure:
The problem exhibits optimal substructure because the minimum jumps to reach
the end from the current range depends only on the farthest reachable index 
from this range. Once we make a jump, the remaining subarray problem is 
structurally identical (min jumps from new start to end).

5. Big O
Time:   O(n)
Space:  O(1)
'''
class Solution:
    def jump(self, nums: List[int]) -> int:
        c = f = l = r = 0  # c = jump count, f = farthest reachable, l/r = current range
        while r < len(nums) - 1:
            for i in range(l, r + 1):
                f = max(f, i + nums[i])  # extend farthest reachable
            l, r, c = r + 1, f, c + 1  # move to next range, increment jump count
        return c
