'''
n = 8
n       = 1000
n - 1   = 0111
n & n-1 = 0000

=> n or 8 is power of two

n & n-1 
Turns right most 1 bit to 0 and flips the 0s to the right of it to 1s.
The & checks if there is only one 1 bit in n.
If there is, n & n-1 will be 0.
'''
class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        return n != 0 and not (n & n - 1)
