'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time:  O()
Space: O()
'''
class Solution:
    def maxArea(self, H: List[int]) -> int:
        res, l, r = 0, 0, len(H) - 1
        while l < r:
            res = max(res, (r-l) * min(H[l], H[r]))
            if H[l] < H[r]:
                l+=1
            else:
                r-=1
        return res
'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time:  O()
Space: O()
'''
