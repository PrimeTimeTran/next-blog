'''
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
            m = (l+r) // 2
            if x - A[m] > A[m+k] - x:
                # Because left partition is bigger, we know we can discard the m
                l = m + 1
            else:
                # Keep m in consideration.
                # Mid wasn't bigger than m+k, but we don't necessarily know if we can discard it yet.
                r = m
        return A[r:r+k]
