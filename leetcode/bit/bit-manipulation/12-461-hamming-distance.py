class Solution:
    def hammingDistance(self, n1: int, n2: int) -> int:
        # XOR. Set to 1 where they're different. Where they're the same set to 0.
        x = n1 ^ n2
        setBits = 0
        while x:
            # Add 1 to setBits if the lowest bit of x is 1; otherwise adds 0.
            setBits += x & 1
            # Shift off the last 
            x >>= 1
        return setBits
        # x = n1 ^ n2
        # res = 0
        # while x:
        #     res += 1
        #     x &= x-1
        # return res
