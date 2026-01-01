const solutions = [
  {
    id: 0,
    solutions: [
      {
        title: '',
        body: '',
        bigOTime: '',
        bigOSpace: '',
        code: ``,
      },
    ],
  },
  {
    id: 875,
    solutions: [
      {
        title: 'Binary Search on Eating Speed (Answer Space Search)',
        body: 'We are not searching through the piles directly. Instead, we binary search over all possible eating speeds k, from 1 to max(piles).',
        bigOTime: 'O(logN)',
        bigOSpace: 'O(n)',
        code: `class Solution:
    def minEatingSpeed(self, piles, H):
        l, r = 0, max(piles)
        while l < r:
            m = (l+r) // 2
            if sum(ceil(i/m) for i in piles) > H:
                l = m + 1
            else:
                r = m
        return r`,
      },
    ],
  },
  {
    id: 34,
    solutions: [
      {
        title: 'Binary Search x2',
        body: 'Use binary search to find the preceding and proceeding index of target via left & right learning midpoint indexes.',
        bigOTime: 'O(logN)',
        bigOSpace: 'O(1)',
        code: `class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if not nums: return [-1,-1]
        l, r = 0, len(nums)-1
        while l < r:
            m = (l+r) // 2
            if nums[m] < target:
                l = m + 1
            else:
                r = m
        n1 = l
        if nums[n1] != target: return [-1,-1]
        l, r = 0, len(nums)-1
        while l < r:
            m = (l+r+1) // 2
            if nums[m] > target:
                r = m - 1
            else:
                l = m
        n2 = l
        return [n1, n2]`,
      },
    ],
  },
  {
    id: 658,
    solutions: [
      {
        title: 'Binary Search shrink toward starting index of range',
        body: '',
        bigOTime: 'O(logN)',
        bigOSpace: 'O(1)',
        code: `class Solution:
    def findClosestElements(self, A, k, x):
        l, r = 0, len(A) - k
        while l < r:
            m = (l+r) // 2
            if x - A[m] > A[m+k] - x:
                l = m + 1
            else:
                r = m
        return A[r:r+k]`,
      },
    ],
  },
  {
    id: 154,
    solutions: [
      {
        title: 'Binary Search with Sorted Invariant',
        body: 'Keep the sorted invariant when discarding partitions.',
        bigOTime: 'O(logN)',
        bigOSpace: 'O(1)',
        code: `class Solution:
    def findMin(self, nums: List[int]) -> int:
        l, r = 0, len(nums) -1
        while l < r:
            m = (l+r) // 2
            if nums[m] < nums[r]:
                r = m
            elif nums[m] > nums[r]:
                l = m + 1
            else:
                r -= 1
        return nums[l]`,
      },
    ],
  },
  {
    id: 153,
    solutions: [
      {
        title: '',
        body: '',
        bigOTime: 'O(logN)',
        bigOSpace: 'O(1)',
        code: `class Solution:
    def findMin(self, nums: List[int]) -> int:
        l, r = 0, len(nums)-1
        while l < r:
            m = (l+r) // 2
            if nums[m] < nums[r]:
                r = m
            else:
                l = m + 1
        return nums[r]`,
      },
    ],
  },
  {
    id: 162,
    solutions: [
      {
        title: 'Binary Search with Right Favored Mid',
        body: "With Binary Search favor the upper boundary. If the midpoint is less than the midpoint we know somewhere to our left is a peak, so shrink in that direction. Discard the midpoint as well because since it's neighbor is greater, it cannot possibly be a peak.",
        bigOTime: 'O(logN)',
        bigOSpace: 'O(1)',
        code: `class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        l, r = 0, len(nums)-1
        while l < r:
            m = (l+r+1) // 2
            if nums[m-1] > nums[m]:
                r = m - 1
            else:
                l = m
        return r
`,
      },
    ],
  },
  {
    id: 81,
    solutions: [
      {
        title: 'Binary Search with Degenerate Fallback',
        body: 'Perform binary search with sorted invariant. In the event the midpoint is the same as the left, increment left so that we shrink search space safely.',
        bigOTime: 'O(logN)',
        bigOSpace: 'O(1)',
        code: `class Solution:
    def search(self, nums: List[int], target: int) -> bool:
        l, r = 0, len(nums)-1
        while l <= r:
            m = (l+r) // 2
            if nums[m] == target:
                return True
            if nums[m] == nums[l]:                  # Can't determine sorted side because duplicates destroy the ordering information — so safely shrink search space.
                l = l + 1
            elif nums[l] <= nums[m]:                # The left partition is sorted
                if nums[l] <= target < nums[m]:     # Does the target lie in the sorted half?
                    r = m - 1
                else:
                    l = m + 1
            else:
                if nums[m] < target <= nums[r]:
                    l = m + 1
                else:
                    r = m - 1
        return False`,
      },
    ],
  },
  {
    id: 33,
    solutions: [
      {
        title: 'Binary Search with "Drop Off" Invariant',
        body: 'The array started sorted but is then rotated. So we know there must be 1 index where the number goes from higher to lower. We can use this invariant to identify which partition is sorted. If the target is in the sorted then we discard the partition with the dropoff otherwise we keep it.',
        bigOTime: 'O(logN)',
        bigOSpace: 'O(1)',
        code: `class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums)-1
        while l <= r:
            m = (l+r) // 2
            if nums[m] == target:
                return m
            elif nums[l] <= nums[m]:                # The left partition is sorted
                if nums[l] <= target < nums[m]:     # Does the target lie in the sorted half?
                    r = m - 1
                else:
                    l = m + 1
            else:
                if nums[m] < target <= nums[r]:
                    l = m + 1
                else:
                    r = m - 1
        return -1`,
      },
    ],
  },
  {
    id: 744,
    solutions: [
      {
        title: 'Binary Search with focus on transition index',
        body: 'We want the index after the the last smaller character. So we set l to m+1 to ensure we always shrink toward that invariant.',
        bigOTime: 'O(logN)',
        bigOSpace: 'O(1)',
        code: `class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        l, r = 0, len(letters)
        while l < r:
            m = (l+r) // 2
            if letters[m] <= target:
                l = m + 1
            else:
                r = m
        return letters[l % len(letters)]`,
      },
    ],
  },
  {
    id: 374,
    solutions: [
      {
        title: 'Binary Search in range 1-n',
        body: 'Set left and right pointers to 1 and n then shrink the search space depending on the result of the mid passed to the guess API.',
        bigOTime: 'O(logN)',
        bigOSpace: 'O(1)',
        code: `class Solution:
    def guessNumber(self, n: int) -> int:
        l, r = 0, n
        while l <= r:
            m = (l+r) // 2
            feedback = guess(m)
            if feedback == 0:
                return m
            elif feedback == -1:
                r = m - 1
            else:
                l = m + 1`,
      },
    ],
  },
  {
    id: 704,
    solutions: [
      {
        title: 'Canonical Binary Search',
        body: 'Use left & right pointers to reduce the search space by half with each iteration of a loop. Exploit sorted invariant to know which half to keep, left or right range.',
        bigOTime: 'O(logN)',
        bigOSpace: 'O(1)',
        code: `class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums)-1
        while l <= r:
            m = (l+r) // 2
            if nums[m] == target:
                return m
            elif nums[m] < target:
                l = m+1
            else:
                r = m-1
        return -1`,
      },
    ],
  },
  {
    id: 146,
    solutions: [
      {
        title: 'Linked List & Dict for better than O(N)',
        body: 'Using an OrderedDict from Python makes this problem so much easier. No need for a LinkedList',
        code: `class ListNode:
    def __init__(self, key, val):
        self.key, self.val = key, val
        self.next = None
        self.prev = None

class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}
        self.left, self.right = ListNode(0,0), ListNode(0,0)
        self.left.next, self.right.prev = self.right, self.left
    def get(self, key: int) -> int:
        if key in self.cache:
            self.remove(self.cache[key])
            self.insert(self.cache[key])
            return self.cache[key].val
        return -1
    def insert(self, n) -> int:
        prev, nxt = self.right.prev, self.right
        prev.next = nxt.prev = n
        n.prev, n.next = prev, nxt
    def remove(self, n) -> int:
        prev, nxt = n.prev, n.next
        prev.next, nxt.prev = nxt, prev
    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.remove(self.cache[key])
        self.cache[key] = ListNode(key, value)
        self.insert(self.cache[key])
        if len(self.cache) > self.cap:
            lru = self.left.next
            self.remove(lru)
            del self.cache[lru.key]


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)`,
      },
      {
        title: 'Use OrderedDict to remove need for Linked List',
        body: 'Using an OrderedDict from Python makes this problem so much easier. No need for a LinkedList',
        code: `class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = OrderedDict()

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value

        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)`,
      },
    ],
  },
  {
    id: 242,
    solutions: [
      {
        title: 'My Title',
        body: 'My Body',
        code: `class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # return Counter(s) == Counter(t)
        # return sorted(s) == sorted(t)`,
      },
    ],
  },
  {
    id: 70,
    solutions: [
      {
        title: 'Brute Force',
        body: 'Try all possibilities',
        code: `class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2: return n
        return self.climbStairs(n-1) + self.climbStairs(n-2)`,
      },
      {
        title: 'Top Down Memo',
        body: 'Recurse and memoize answers to subproblems',
        code: `class Solution:
    def climbStairs(self, n: int) -> int:
        memo = {}
        def dp(i):
            if i <= 2:
                return i
            if i not in memo:
                memo[i] = dp(i-2) + dp(i-1)
            return memo[i]
        return dp(n)`,
      },
      {
        title: 'Bottom Up Table',
        body: 'Build up solution iteratively book keeping answers to subproblems to use in subsequent problems',
        code: `class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2: return n
        dp = [0]*(n+1)
        dp[1] = 1
        dp[2] = 2
        for i in range(3, n+1):
            dp[i] = dp[i-2] + dp[i-1]
        return dp[n]`,
      },
      {
        title: 'Rolling DP',
        body: "Track only what's important to the next iteration",
        code: `class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2:
            return n
        prior, prev = 1, 2
        for _ in range(3, n+1):
            prior, prev = prev, prev+prior
        return prev`,
      },
    ],
  },
]

export default solutions
