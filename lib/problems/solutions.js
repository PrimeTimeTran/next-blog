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
    id: 2402,
    solutions: [
      {
        title: '',
        body: '',
        bigOTime: 'O(m log m)',
        bigOSpace: 'O(n)',
        code: `from heapq import heapify, heappop, heappush
class Solution:
    def mostBooked(self, n, meetings):
        occupied, utilization, vacant = [], [0] * n, [r for r in range(n)]
        heapify(vacant)
        for start, end in sorted(meetings):
            while occupied and occupied[0][0] <= start:
                _, r = heappop(occupied)
                heappush(vacant, r)
            if vacant:
                r = heappop(vacant)
                heappush(occupied, [end, r])
            else:
                time_free, r = heappop(occupied)
                heappush(occupied, [time_free + end - start, r])
            utilization[r] += 1
        return utilization.index(max(utilization))`,
      },
    ],
  },
  {
    id: 463,
    solutions: [
      {
        title: 'Calculate Island Perimeter Using DFS',
        body: 'This solution computes the perimeter of an island in a 2D grid of 0s (water) and 1s (land) using Depth-First Search (DFS):',
        bigOTime: 'O(m × n)',
        bigOSpace: 'O(m × n)',
        code: `class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        self.res, seen = 0, set()
        m, n = len(grid), len(grid[0])
        def dfs(r,c):
            out = r < 0 or r == m or c < 0 or c == n
            if out or grid[r][c] == 0: return 1
            if (r,c) in seen: return 0
            seen.add((r, c))
            res = 0
            for dr, dc in [(r+1,c),(r-1,c), (r,c+1), (r, c-1)]:
                res += dfs(dr,dc)
            self.res = max(res, self.res)
            return res

        for r in range(m):
            for c in range(n):
                if grid[r][c] == 1 and (r,c) not in seen:
                    dfs(r,c)
        return self.res`,
      },
    ],
  },
  {
    id: 997,
    solutions: [
      {
        title: 'Find the Town Judge Using Trust Score Counting',
        body: 'This solution identifies the "town judge" in a town of n people, where the judge is trusted by everyone else but trusts no one. It uses a trust score system:',
        bigOTime: 'O(n + m)',
        bigOSpace: 'O(n)',
        code: `class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        g = defaultdict(int)
        for a, b in trust:
            g[a] -= 1; g[b] += 1
        for i in range(1, n+1):
            if g[i] == n - 1: return i
        return -1
`,
      },
    ],
  },
  {
    id: 1970,
    solutions: [
      {
        title: 'Binary Search on Day with DFS Path Validation',
        body: 'Use binary search on the day number to find the latest day when it’s still possible to cross the grid from top to bottom. For each candidate day, simulate the flooded cells and check if a path exists using DFS from any cell in the top row to the bottom row. The binary search efficiently narrows down the last day where crossing is possible.',
        bigOTime: 'O(m * n * log D)',
        bigOSpace: 'O(m * n)',
        code: `class Solution:
    def latestDayToCross(self, m: int, n: int, cells: List[List[int]]) -> int:
        def dfs(board, r, c):
            if r == m - 1: return True
            board[r][c] = 1
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                nr, nc = r + dr, c + dc
                inbounds = 0 <= nr < m and 0 <= nc < n
                if inbounds and board[nr][nc] == 0:
                    if dfs(board, nr, nc): return True

        def can_cross(day):
            board = [[0]*n for _ in range(m)]
            for i in range(day):
                r, c = cells[i]
                board[r-1][c-1] = 1
            return any(board[0][c] == 0 and dfs(board, 0, c) for c in range(n))

        l, r = 0, len(cells)
        while l < r:
            mid = (l + r + 1) // 2
            if can_cross(mid):
                l = mid
            else:
                r = mid - 1
        return l`,
      },
    ],
  },
  {
    id: 719,
    solutions: [
      {
        title: 'Binary Search on Pair Distances Using Two-Pointer Counting',
        body: 'Sort the array and binary search over the possible distance values [0, max(nums)-min(nums)]. For each candidate distance D, count the number of pairs with distance ≤ D using a two-pointer approach. If there are at least k such pairs, try a smaller distance; otherwise, increase the distance. The smallest D satisfying the count is the answer.',
        bigOTime: 'O(n log n + n log W)',
        bigOSpace: 'O(1)',
        code: `class Solution:
    def smallestDistancePair(self, nums: List[int], k: int) -> int:
        nums.sort()
        n = len(nums)
        def count_pairs(D):
            j = count = 0
            for i in range(n):
                while j < n and nums[j] - nums[i] <= D:
                    j+=1
                count += j - i - 1
            return count

        l, r = 0, nums[-1] - nums[0]
        while l < r:
            m = (l+r) // 2
            if count_pairs(m) >= k:
                r = m 
            else:
                l = m + 1
        return r`,
      },
    ],
  },
  {
    id: 1011,
    solutions: [
      {
        title: 'Binary Search on Ship Capacity',
        body: 'Use binary search over possible ship capacities between max(weights) and sum(weights). For each candidate capacity m, simulate loading the packages sequentially to count how many days are needed. If it exceeds D, increase the lower bound; otherwise, try a smaller capacity to find the minimum that ships all packages within D days.',
        bigOTime: 'O(logN)',
        bigOSpace: 'O(n)',
        code: `class Solution:
    def shipWithinDays(self, weights, D):
        l, r = max(weights), sum(weights)
        while l < r:
            m, need, cur = (l + r) / 2, 1, 0
            for w in weights:
                if cur + w > m:
                    need += 1
                    cur = 0
                cur += w
            if need > D: 
                l = m + 1
            else: 
                r = m
        return int(l)`,
      },
    ],
  },
  {
    id: 240,
    solutions: [
      {
        title: 'Search from Top-Right in Sorted 2D Matrix',
        body: 'Start at the top-right corner and move left if the current value is too large or down if it’s too small, exploiting the row- and column-wise sorted property to find the target in O(rows + cols) time.',
        bigOTime: 'O(logN)',
        bigOSpace: 'O(n)',
        code: `class Solution:
    def searchMatrix(self, mat: List[List[int]], target: int) -> bool:
        rows, cols = len(mat), len(mat[0])
        r, c = 0, cols-1
        while r < rows and c >= 0:
            val = mat[r][c]
            if val == target:
                return True
            elif val > target:
                c -= 1
            else:
                r += 1
        return False`,
      },
    ],
  },
  {
    id: 74,
    solutions: [
      {
        title: 'Binary Search on Flattened 2D Matrix',
        body: 'Treat the 2D matrix as a sorted 1D array by mapping index m to (row, col) with divmod, then perform standard binary search to efficiently find the target.',
        bigOTime: 'O(logN)',
        bigOSpace: 'O(n)',
        code: `class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        R, C = len(matrix), len(matrix[0])
        l, r = 0, R * C - 1
        while l <= r:
            m = (l+r) // 2
            dr, dc = divmod(m, C)
            val = matrix[dr][dc]
            if val == target:
                return True
            elif val < target:
                l = m + 1
            else:
                r = m - 1
        return False`,
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
        body: 'Find the k closest elements by binary searching the window of size k that minimizes the distance to x.',
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
