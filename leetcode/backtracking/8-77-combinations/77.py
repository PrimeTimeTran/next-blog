'''
1. Understand
2. Diagram
Consider n = 4, k = 2
  back(1, [])
  │
  ├── choose 1 → back(2, [1])
  │   ├── choose 2 → back(3, [1,2])  ✓ save [1,2]
  │   ├── choose 3 → back(4, [1,3])  ✓ save [1,3]
  │   └── choose 4 → back(5, [1,4])  ✓ save [1,4]
  ├── choose 2 → back(3, [2])
  │   ├── choose 3 → back(4, [2,3])  ✓ save [2,3]
  │   └── choose 4 → back(5, [2,4])  ✓ save [2,4]
  ├── choose 3 → back(4, [3])
  │   └── choose 4 → back(5, [3,4])  ✓ save [3,4]
  └── choose 4 → back(5, [4])
      └── (no choices left, path too short → stop)

output = [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

3. Pseudocode
4. Code
5. BigO
    Time:   O(C(n, k) * k)  where C(n, k) is the number of combinations
        "n choose k" = C(n, k)
        Called the binomial coefficient, it represents the number of ways to choose k elements from a set of n elements without regard to the order of selection.
    Space:  O(C(n, k) * k)            where k is the length of each combination  
        “The runtime is proportional to C(n, k), which is polynomial 
        when 𝑘 is small but exponential in the worst case when 𝑘 is on the order of 𝑛”
'''

# class Solution:
#     def combine(self, n: int, k: int) -> List[List[int]]:
#         res = []
#         def back(start, path):
#             if len(path) == k:
#                 return res.append(path.copy())
#             for i in range(start, n+1):
#                 path.append(i)
#                 back(i+1, path)
#                 path.pop()
#         back(1, [])
#         return res

class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        res = []
        def back(start, path):
            if len(path) == k:
                res.append(path)
            for i in range(start, n+1):
                back(i+1, path+[i])
            return res
        return back(1, [])
