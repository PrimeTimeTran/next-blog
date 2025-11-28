'''
Remove all trailing bits that flip within [left, right]
by shifting until left and right share the same prefix.
Then restore the prefix to its original position.
'''
class Solution:
    def rangeBitwiseAnd(self, left: int, right: int) -> int:
        shift = 0
        while left < right:
            left >>= 1
            right >>= 1
            shift += 1
        return left << shift
