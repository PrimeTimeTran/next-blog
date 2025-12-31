const solutions = [
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
