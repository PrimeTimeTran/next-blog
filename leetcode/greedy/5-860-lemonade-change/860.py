'''
1. Understand
Greedy. Count total number of each bill you receive and return with maximum size bills first when able.
If at any point you cannot make change, return False

5. Big O
Time:   O(n) where n is the length of bills
Space:  O(1) because we have a few single variables which don't grow with the size of inputs
'''
class Solution(object):
    def lemonadeChange(self, bills):
        c5 = c10 = 0
        for b in bills:
            if b == 5:
                c5+=1
            elif b == 10:
                if c5 > 0:
                    c5-=1
                    c10+=1
                else:
                    return False
            else:
                if c10 > 0 and c5 > 0:
                    c10 -= 1
                    c5 -= 1
                elif c5 > 2:
                    c5 -= 3
                else:
                    return False
        return True
