'''
XOR all numbers in the array.
XOR of two identical numbers is 0.
XOR of any number with 0 is the number itself.
So, XORing all elements will cancel out duplicates and leave only the single number.
'''
class Solution:
  def singleNumber(self, nums: List[int]) -> int:
    res = 0
    for n in nums:
        res ^= n
    return res
