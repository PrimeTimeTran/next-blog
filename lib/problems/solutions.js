const solutions = [
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
