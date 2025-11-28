"""
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

LEVEL 0
cur=[1,2,2], path=[]
→ add []

├── pick 1  (i=0)
│     cur=[2,2], path=[1]
│     → add [1]
│
│     ├── pick 2  (i=0)
│     │     cur=[2], path=[1,2]
│     │     → add [1,2]
│     │
│     │     └── pick 2  (i=0)
│     │           cur=[], path=[1,2,2]
│     │           → add [1,2,2]
│     │
│     └── skip 2 (i=1 duplicate)
│
├── pick 2  (i=1)
│     cur=[2], path=[2]
│     → add [2]
│
│     └── pick 2 (i=0)
│           cur=[], path=[2,2]
│           → add [2,2]
│
└── skip 2 (i=2 duplicate)

results = [
  [], 
  [1], 
  [1,2], 
  [1,2,2], 
  [2], 
  [2,2]
]
Approach: Backtracking with sorting and skipping duplicates
To handle duplicates, we first sort the input array. During the backtracking process, when we
encounter a duplicate element at the same recursive depth, we skip it to avoid generating
duplicate subsets.
[]
├─ [1]
│  ├─ [1,2]
│  │  └─ [1,2,2]
│  └─ (skip duplicate 2)
├─ [2]
│  └─ [2,2]
└─ (skip duplicate 2)
3. Pseudocode
4. Code
5. BigO
Time:    O(n * 2ⁿ)
  - There are 2ⁿ total subsets.
  - Creating each subset can take up to O(n) time (copying elements into a new list).
  - The result itself stores all subsets, which also costs O(n · 2ⁿ) space.
Space:   O(n * 2ⁿ)
"""


class Solution:
    def subsetsWithDup(self, nums):
        nums.sort()
        res = []
        def back(cur, path):
            res.append(path)
            for i in range(len(cur)):
                if i > 0 and cur[i] == cur[i-1]: continue
                back(cur[i+1:], path+[cur[i]])
            return res
        return back(nums, [])
