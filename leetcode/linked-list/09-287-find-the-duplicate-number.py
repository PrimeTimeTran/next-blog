'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
   Time: O()
   Space: O()
https://leetcode.com/problems/find-the-duplicate-number/solutions/5041189/video-floyd-s-tortoise-and-hare-algorithm-and-prove-it-with-simple-calculation/
'''
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        s, f = nums[0], nums[0]

        while True:
            s, f = nums[s], nums[nums[f]]
            if s == f:
                break
        f = nums[0]
        while s != f:
            s, f = nums[s], nums[f]
        return s
