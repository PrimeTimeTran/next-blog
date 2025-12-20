'''
“I need to know something about earlier elements, but only the useful ones.”

[1,3,-1,-3,5,3,6,7]
[1]                             q = [0]        (vals: [1])
[1,3]                           q = [1]        (vals: [3])
[1,3,-1]                        q = [1,2]      (vals: [3,-1])        res = [3]
  [3,-1,-3]                     q = [1,2,3]    (vals: [3,-1,-3])     res = [3,3]
    [-1,-3,5]                   q = [4]        (vals: [5])           res = [3,3,5]
       [-3,5,3]                 q = [4,5]      (vals: [5,3])         res = [3,3,5,5]
          [5,3,6]               q = [6]        (vals: [6])           res = [3,3,5,5,6]
            [3,6,7]             q = [7]        (vals: [7])           res = [3,3,5,5,6,7]


Maintain monotonic decreasing queue.
Loop nums comparing current number with previous numbers. If it's larger than previous than pop the previous.
Add index to the queue
Check range of the window. If an index becomes out of bounds, pop from the left of the queue.
Check size of window. If it's correct size, k, append the 0 index item from the queue to the response.
'''
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        q, res = deque([]), []
        for r, n in enumerate(nums):
            while q and n >= nums[q[-1]]:
                q.pop()
            q.append(r)
            # Remove indices that fall out of the current window. We need to shrink the queue to match the window
            if q[0] == r - k:
                q.popleft()
            # We can not append because the window is large enough(matches size k)
            if r >= k - 1:
                res.append(nums[q[0]])
        return res
