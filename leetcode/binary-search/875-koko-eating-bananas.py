'''
P(k) = “If Koko eats at speed k bananas/hour, she can finish all piles within H hours.”

False False False | True True True
                 ↑
           minimum valid speed

'''
class Solution:
    def minEatingSpeed(self, piles, H):
        l, r = 0, max(piles)
        # Continue while there are at least two distinct candidates between l and r.
        # r == l + 1
        # l = largest invalid speed
        # r = smallest valid speed
        while l+1 < r:
            m = (l+r)//2
            # Check whether speed m is sufficient to finish all piles within H hours.
            # If the total required hours exceeds H, then m is too slow and we must
            # search higher speeds. Otherwise, m is sufficient, and we try to find
            # a smaller feasible speed.
            if sum(ceil(i/m) for i in piles) > H:
                l = m
            else:
                r = m
        return r
