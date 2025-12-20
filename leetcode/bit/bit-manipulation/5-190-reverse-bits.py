'''
Use bit manipulation to reverse the bits of a 32-bit unsigned integer.
Iterate the 32 bits of the input number.
For each bit, shift the result to the left by 1 (to make space for the new bit),
then add the least significant bit of the input number to the result.
Finally, shift the input number to the right by 1 to process the next bit.
'''
class Solution:
    def reverseBits(self, n: int) -> int:
        res = 0
        for i in range(32):
            res = (res << 1) + (n & 1)
            n = n >> 1
        return res
