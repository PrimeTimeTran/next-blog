'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O 
Time:   O((T/M) ⋅ 2ᵀ⁄ᴹ)   where T is the target and M is the minimal in the list of candidates
Space:  O((T/M) ⋅ 2ᵀ⁄ᴹ)   where T is the target and M is the minimal in the list of candidates
'''
class Solution:
    def combinationSum(self, C: List[int], T: int) -> List[List[int]]:
        res = []
        def back(i, path):
            if len(C) == i or sum(path) > T:
                return
            if sum(path) == T:
                return res.append(path)
            back(i+1, path)
            back(i, path + [C[i]])
            return res
        return back(0, [])
