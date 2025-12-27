'''
1. Understand
Greedy approach: sort happiness in descending order. 
Select the top k children. For each child, subtract the number of previously selected children 
to account for the incremental cost, and accumulate only positive contributions.

5. Big O()
Time:   O(nlogn + k))
Space:  O(1)
'''
class Solution:
    def maximumHappinessSum(self, happiness: List[int], k: int) -> int:
        happiness.sort(reverse=True)
        res = 0
        for i in range(k):
            res += happiness[i] - i if happiness[i] - i > 0 else 0
        return res
