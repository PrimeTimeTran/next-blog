'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:    O()
Space:   O()
'''
class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        res = []
        def backtrack(start, path, n, k):
            if n == 0 and k == 0:
                return res.append(path[:])
            for i in range(start, 10):
                if i > n or k <= 0:
                    break
                path.append(i)
                backtrack(i+1, path, n - i, k - 1)
                path.pop()
        backtrack(1, [], n, k)
        return res
'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:    O()
Space:   O()
'''
class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        res = []
        
        def backtrack(num, stack, target):
            if len(stack) == k:
                if target == 0:
                    res.append(stack)
                return
            
            for x in range(num + 1, 10):
                if x <= target:
                    backtrack(x, stack + [x], target - x)
                else:
                    return
        
        backtrack(0, [], n)
        return res
'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:    O()
Space:   O()
'''
class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        res = []
        def backtrack(start, path):
            if len(path) > k or sum(path) > n:
                return
            if len(path) == k and sum(path) == n:
                return res.append(path[:])
            for i in range(start, 10):
                path.append(i)
                backtrack(i + 1, path)
                path.pop()
        backtrack(1, [])
        return res

'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:    O(2⁹⋅k) ⇒ O(1) 
Where k is the length of the path which sums to n. Because the constraints says it's bound by a constant number, 9, it's constant.
Space:   O(k) ⇒ O(1)
Where k is the length of the path which sums to n. Because the constraints says it's bound by a constant number, 9, it's constant.
'''
class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        res = []
        def back(start, path):
            if len(path) == k and sum(path) == n:
                return res.append(path)
            for i in range(start, 10):
                back(i+1, path+[i])
            return res
        return back(1, [])
