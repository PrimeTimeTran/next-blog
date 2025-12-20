'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time:   O()
Space:  O()
'''
from typing import List

class Solution:
    def alien_order(self, words: List[str]) -> str:
        g = {c: [] for w in words for c in w}
        for i in range(len(words) - 1):
            w1, w2 = words[i], words[i+1]
            minlength = min(len(w1), len(w2))
            if len(w1) > len(w2) and w1[:minlength] == w2[:minlength]:
                return ""
            for j in range(minlength):
                if w1[j] != w2[j]:
                    g[w1[j]].append(w2[j])
                    break
        res, seen = [], {}
        def dfs(c):
            if c in seen: return seen[c]
            seen[c] = False
            if not all(dfs(nei) for nei in g[c]): return False
            seen[c] = True
            res.append(c)
            return True

        if not all(dfs(c) for c in sorted(g)):
            return ""
        
        return "".join(res[::-1])

'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
'''
