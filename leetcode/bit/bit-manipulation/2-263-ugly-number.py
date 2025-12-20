'''
“numbers that aren't ugly have prime factors other than 2, 3, or 5.”
'''
class Solution:
    def isUgly(self, num: int) -> bool:
        if num <= 0: return False
        # "Is the least significant bit 0?"
        # If so, divide by 2 until it is odd.
        while (num & 1) == 0:
            num >>= 1
        for p in [3, 5]:
            while num % p == 0:
                num /= p
        return num == 1
