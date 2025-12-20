'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:    
    O(n * 2ⁿ)
        - Number of leaf nodes (all partitions) ≈ O(2^n)
        - Each node costs O(n) for palindrome check + list copy
Space:   
    O(n * 2ⁿ)
        - Recursion stack: max depth = n → O(n)
        - Result storage: each partition can have ≤ n substrings → storing all partitions = O(n * 2^n)
'''
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        res = []
        def back(cur, path):
            if not cur:
                res.append(path)
            for i in range(1, len(cur)+1):
                if cur[:i] == cur[:i][::-1]:
                    back(cur[i:], path+[cur[:i]])
            return res
        return back(s, [])
