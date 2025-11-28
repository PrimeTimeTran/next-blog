class Solution:
    def findSubsequences(self, nums):
        res = []
        
        def backtrack(start, path):
            if len(path) >= 2:
                res.append(path[:])

            used = set()       # prevents duplicates at this depth

            for i in range(start, len(nums)):
                if (nums[i] in used): 
                    continue   # skip duplicates at same depth

                if not path or nums[i] >= path[-1]:
                    used.add(nums[i])
                    backtrack(i + 1, path + [nums[i]])

        backtrack(0, [])
        return res


class Solution:
    def findSubsequences(self, nums: List[int]) -> List[List[int]]:
        # subs = {()}           # start with one empty tuple

        # for num in nums:
        #     subs |= {         # union: add new subsequences created from this num
        #         sub + (num,)  # new subsequence
        #         for sub in subs
        #         if not sub or sub[-1] <= num   # subsequence must stay non-decreasing
        #     }

        # # keep only those with length >= 2
        # return [sub for sub in subs if len(sub) >= 2]

        subs = {()}
        for num in nums:
            subs |= {sub + (num,)
                     for sub in subs
                     if not sub or sub[-1] <= num}
        return [sub for sub in subs if len(sub) >= 2]
