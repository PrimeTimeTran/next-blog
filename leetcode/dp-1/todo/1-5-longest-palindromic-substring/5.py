class Solution:
    def longestPalindrome(self, s: str) -> str:
        self.ans, n = '', len(s)
        def expand(l, r):
            while l >= 0 and r < n and s[l] == s[r]:
                if r - l + 1 > len(self.ans):
                    self.ans = s[l:r+1]
                l-=1
                r+=1
        for i in range(n):
            expand(i, i)
            expand(i, i+1)
        return self.ans
