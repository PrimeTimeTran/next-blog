'''
Count the number of 1 bits in the binary representation of an integer.
When the n = n & (n - 1) operation is performed, the rightmost 1 bit in n is set to 0 then 
the bits to the left of that bit remain the same, and the bits to the right of that bit are all set to 1.
The additional & operation with n - 1 turns those 1s to 0s.

Do this until n becomes 0, and count how many times this operation is performed.
'''
class Solution:
  def hammingWeight(self, n: int) -> int:
    res = 0
    while n:
        res += 1
        n &= n-1
    return res
