'''
1. Understand
“This algorithm explores subsets of the input, and there are 2ⁿ possible subsets of n elements.”

2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:    O(2^n) where n is the number of elements in C
    2 × 2 × 2 × ⋯ × 2 = 2ᴺ
    This is a subsets calculation, where each element has two choices: to be included or not included in a combination.

Space:   O(n)

1. Auxiliary space (stack + path)
    O(n)
2. Output space
    "The auxiliary space is O(n) due to the recursion stack and path. The total space including output is O(n·2ⁿ) in the worst case."

    In the worst case, all elements in C are unique, and the number of combinations is maximized.
    The number of combinations is bounded by O(2^n), and each combination can take up to O(n) space.
    Therefore, the output space is O(n * 2^n).
    Overall, the space complexity is dominated by the output space, resulting in O(n * 2^n).
'''
class Solution:
    def combinationSum2(self, C: List[int], T: int) -> List[List[int]]:
        res = []
        C.sort()
        def back(start, path, total):
            if total == T:
                return res.append(path[:])
            if total > T or start == len(C):
                return
            for i in range(start, len(C)):
                if i > start and C[i] == C[i-1]: continue
                path.append(C[i])
                back(i+1, path, total+C[i])
                path.pop()
            return res
        return back(0, [], 0)
