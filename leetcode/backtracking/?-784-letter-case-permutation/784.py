'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time:  O()
Space: O()
'''
class Solution:
    def letterCasePermutation(self, s: str) -> List[str]:
        n, res = len(s), []
        def back(i, path):
            if i == n:
                return res.append(path)
            if s[i].isalpha():
                back(i+1, path + s[i].lower())
                back(i+1, path + s[i].upper())
            else:
                back(i+1, path + s[i])
            return res
        return back(0, '')
'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time:  O()
Space: O()
'''
class Solution:
    def letterCasePermutation(self, s: str) -> List[str]:
        res = ['']
        for c in s:
            res = [x + cc for x in res for cc in {c, c.swapcase()}]
        return res
