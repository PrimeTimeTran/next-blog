'''

'''
class Solution:
    def findComplement(self, num: int) -> int:
        res = 0
        i = 0        
        while num > 0:
            curr_bit = num & 1
            new_bit = 1 if curr_bit == 0 else 0
            res += new_bit * (2**i)
            num >>= 1
            i += 1
        return res
