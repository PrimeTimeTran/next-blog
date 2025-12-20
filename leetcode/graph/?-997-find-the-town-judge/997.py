'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:   O()
Space:  O()
'''
class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        g = defaultdict(int)
        for a, b in trust:
            g[a] -= 1
            g[b] += 1 

        for i in range(1, n+1):
            if n-1 == g[i]: return i
        return -1

'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:   O()
Space:  O()
'''
