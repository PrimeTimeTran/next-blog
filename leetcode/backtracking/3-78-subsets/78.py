'''
1. Understand
This solution builds the power set iteratively by starting with the empty subset and, 
for each number, adding new subsets formed by appending that number to all existing subsets. 
After processing each element, the result list doubles, eventually containing all possible subsets.

2. Diagram
Input:  nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
LEVEL 0
cur=[], path=[]
→ add []

├── pick 1
│     cur=[2,3], path=[1]
│     → add [1]
│     ├── pick 2
│     │     cur=[3], path=[1,2]
│     │     → add [1,2]
│     │     ├── pick 3
│     │     │     cur=[], path=[1,2,3]
│     │     │     → add [1,2,3]
│     │     └── skip 3
│     └── skip 2
│           cur=[3], path=[1]
│           → add [1,3]
│           ├── pick 3
│           │     cur=[], path=[1,3]
│           │     → add [1,3]
│           └── skip 3
├── pick 2
│     cur=[3], path=[2]
│     → add [2]
│     ├── pick 3
│     │     cur=[], path=[2,3]
│     │     → add [2,3]
│     └── skip 3
└── pick 3
      cur=[], path=[3]
      → add [3]
results = [
  [], 
  [1], 
  [1,2], 
  [1,2,3], 
  [1,3], 
  [2], 
  [2,3], 
  [3]
]
^n

omw

3. Pseudocode
4. Code
5. BigO
Time:    O(n * 2ⁿ)
  - There are 2^n total subsets.
  - Creating each subset can take up to O(n) time (copying elements into a new list).
  - The result itself stores all subsets, which also costs O(n · 2^n) space.
Space:   O(n * 2ⁿ)
'''

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = [[]]
        for n in nums:
            res += [[n] + subset for subset in res]
        return res
