'''
1. Understand
Greedy algorithm. Match the least greedy child with the smallest cookie current available.
If the cookie is enough to make the child content we can discard it knowing we've met all the conditions required.

The child has received a cookie maximizing the content we can achieve, we know that we're making an optimal choice
given our constraints(we don't have to check child again and can reduce cookie size.)

Big O()
Time:   O(mlogm + nlogn)
Space:  O(1)

Asymptotically, the linear term 
O(m + n)[from custom while loop] is dominated by the sorting terms O(m log m + n log n) (for large m and n), so we usually simplify it to:
O(mlogm+nlogn)

If I had used sorted(g) or sorted(s) instead of g.sort() / s.sort(), 
that would create new arrays and use O(m + n) space. But with in-place sorting, it’s truly constant extra space.
O(1)
'''
class Solution:
    def findContentChildren(self, g, s):
        g.sort()
        s.sort()
        i = j = c = 0
        while i < len(g) and j < len(s):
            if g[i] <= s[j]:
                i+=1
                c+=1
            j+=1
        return c
