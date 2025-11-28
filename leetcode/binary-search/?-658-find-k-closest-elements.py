'''
658-find-k-closest-elements.py
1. Understand
   Given a sorted array, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order.
2. Diagram
    A = [1,2,3,4,5], k = 4,
3. Pseudocode
4. Code
5. BigO
   Time: O(log(n-k) + k)
   Space: O(1)
'''
class Solution:
    def findClosestElements(self, A, k, x):
        l, r = 0, len(A) - k
        while l < r:
            m = (l + r) // 2
            # “The left edge of this window is farther from x than the new right edge would be.”
            if x - A[m] > A[m + k] - x:
                l = m + 1
            else:
                r = m
        return A[r:r + k]
