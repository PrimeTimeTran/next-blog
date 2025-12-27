'''
1. Understand
Greedy. Maximize the number of apples you put in each box by
starting with the largest box first and then filling all those before the smaller ones.

5. Big O
Time:   O(mlogm + m)
Space:  O(1)
'''
class Solution:
    def minimumBoxes(self, apple: List[int], capacity: List[int]) -> int:
        total = sum(apple)
        capacity.sort(reverse=True)
        res = 0
        for c in capacity:
            total -= c
            res += 1
            if total <= 0: break
        return res
