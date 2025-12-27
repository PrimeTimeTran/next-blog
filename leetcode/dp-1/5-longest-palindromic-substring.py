'''
1. Understand
Center expand
Big O
    time:   O(n²)
    space:  O(1)
'''
class Solution:
    def longestPalindrome(self, s: str) -> str:
        self.ans, n = '', len(s)
        def expand(l, r):
            while l >= 0 and r < n and s[l] == s[r]:
                if (r-l+1) > len(self.ans):
                    self.ans = s[l:r+1]
                l-=1
                r+=1
        for i in range(n):
            expand(i, i)
            expand(i, i+1)
        return self.ans
'''
1. Understand
Top Down Memo. 
Check all substrings with length >= 2.
Big O
    time:   O(n³)
    space:  O(n) (due to slicing)
'''
class Solution:
    def longestPalindrome(self, s: str) -> str:
        memo, ans, n = {}, '', len(s)
        def dp(l, r):
            nonlocal ans
            if l > r: return True
            if (l, r) in memo: return memo[(l, r)]
            if s[l] == s[r]:
                inner = dp(l+1, r-1)
                memo[(l, r)] = inner
                if inner and (r-l+1) > len(ans):
                    ans = s[l:r+1]
                return inner
            else:
                memo[(l, r)] = False
                return False
        for i in range(n):
            for j in range(i, n):
                dp(i, j)
        return ans
'''
1. Understand
Bottom Up Tab. 
Check all substrings with length >= 2.
Big O
    time:   O(n³)
    space:  O(n) (due to slicing)
'''
class Solution:
    def longestPalindrome(self, s: str) -> str:
        n, res = len(s), s[0]
        for l in range(n-1):
            for r in range(l+1, n):
                substr, len_substr = s[l:r+1], r - l + 1
                is_palindrome = substr == substr[::-1]
                is_new_max = len_substr > len(res)
                if is_new_max and is_palindrome:
                    res = substr
        return res
'''
1. Understand
Manacher’s Algorithm
Big O
    time: O(n)
    space: 
'''
class Solution:
    def longestPalindrome(self, s: str) -> str:
        # Step 1: Transform the string
        T = '#'.join('^{}$'.format(s))  # add sentinels
        n = len(T)
        P = [0] * n  # radius array
        C = R = 0    # center and right edge of current rightmost palindrome

        for i in range(1, n-1):
            mirr = 2*C - i  # mirror of i around C

            if i < R:
                P[i] = min(R - i, P[mirr])

            # expand around i
            while T[i + P[i] + 1] == T[i - P[i] - 1]:
                P[i] += 1

            # update center and right boundary
            if i + P[i] > R:
                C, R = i, i + P[i]

        # Find the maximum element in P
        max_len, center_index = max((n, i) for i, n in enumerate(P))
        start = (center_index - max_len)//2  # map back to original string indices
        return s[start: start + max_len]
