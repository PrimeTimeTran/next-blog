"""
1. Understand
Get every order possible from a list of items.
    - Input: [1,2,3]
    - Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
2. Diagram
3. Pseudocode
4. Code.
5. Big O
    1. 
        time: O(n · n!)
        space: O(n · n!)
    2. Call stack + temporary lists: O(n²)
        Recursion depth is n → call stack O(n)
        At each level you allocate new lists (rem[:i] and path + [...]).
        Worst case, across all levels, this adds up to O(n²) simultaneously allocated.
        But this is overshadowed by the output size.

                                         [1,2,3], []
                   /                           |                           \
              pick 1                        pick 2                        pick 3
          [2,3], [1]                    [1,3], [2]                    [1,2], [3]
           /           \                 /           \                 /           \
     pick 2         pick 3         pick 1         pick 3         pick 1         pick 2
 [3], [1,2]     [2], [1,3]     [3], [2,1]     [1], [2,3]     [2], [3,1]     [1], [3,2]
      |               |             |               |             |               |
 [ ],[1,2,3]   [ ],[1,3,2]   [ ],[2,1,3]     [ ],[2,3,1]   [ ],[3,1,2]   [ ],[3,2,1]
   output:        output:        output:          output:       output:        output:
  [1,2,3]        [1,3,2]        [2,1,3]          [2,3,1]       [3,1,2]        [3,2,1]
  
Time:
    O(n · n!)
Space:
    O(n · n!)
"""
class Solution:
    def permuteUnique(self, nums):
        res = []
        nums.sort()
        def back(cur, path):
            if not cur:
                res.append(path)
            for i in range(len(cur)):
                if i > 0 and cur[i] == cur[i-1]: continue
                back(cur[:i]+cur[i+1:], path+[cur[i]])                
            return res
        return back(nums, [])
