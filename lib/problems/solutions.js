const solutions = [
  {
    id: 242,
    solutions: [
      {
        description: '',
        body: `class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # return Counter(s) == Counter(t)
        # return sorted(s) == sorted(t)`,
      },
    ],
  },
  {
    id: 121,
    solutions: [
      {
        description: '',
        body: `class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        res = l = 0
        for r, p in enumerate(prices):
            res = max(res, p - prices[l])
            if p < prices[l]: 
                l = r
        return res`,
      },
    ],
  },
]

export default solutions
