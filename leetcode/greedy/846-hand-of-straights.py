'''
1. Understand
Greedy. Count each card in the hand. If any card in a straight after until card + groupSize is less than the count of that card
than the lower bound cannot complete a straight of groupSize length, so we know we can return False

If we can increment each card and find all subsequent cards are found, we may have a a proper straight.

Repeat this until all "starts" of a straight are exhausted and cards are accounted for.

5. Big O
Time:   O(n)+O(mlogm)+O(m⋅groupSize) where n is the length of the hand, m is the number of unique cards.
Space:  O(m) for the counter and sorted keys
'''
class Solution(object):
    def isNStraightHand(self, hand, groupSize):
        if len(hand) % groupSize != 0: return False
        count = Counter(hand)
        sorted_keys = sorted(count.keys())
        for k in sorted_keys:
            for i in range(1, groupSize):
                if count[k] > 0:
                    if count[k+i] < count[k]:
                        return False
                    count[k+i] -= count[k]
        return True
