# ✅ 91. Decode Ways

https://leetcode.com/problems/decode-ways

## 1) Brute Force (Plain Recursion)

```python
class Solution:
    def numDecodings(self, s: str) -> int:
        def dfs(i):
            if i == len(s):
                return 1
            if s[i] == "0":
                return 0
            count = dfs(i+1)
            if i < len(s) and 10 <= int(s[i:i+2]) <= 26:
                count += dfs(i+2)
            return count
        return dfs(0)

# Time:   O(2ⁿ)
# Space:  O(n)   (recursion stack)
```

---

## 2) Top-Down with Memo

```python
class Solution:
    def numDecodings(self, s: str) -> int:
        n = len(s)
        memo = { n: 1 }
        def dp(i):
            if i in memo:
                return memo[i]
            if s[i] == "0":
                return 0
            memo[i] = dp(i+1)
            if (i+1 < n) and (s[i] == "1" or (s[i] == "2" and s[i+1] in "0123456")):
                memo[i] += dp(i+2)
            return memo[i]
        return dp(0)

# Time:   O(n)
# Space:  O(n)   (memo + recursion stack)
```

---

## 3) Bottom-Up with Tabulation

```python
class Solution:
    def numDecodings(self, s: str) -> int:
        n = len(s)
        dp = [0] * (n + 1)

        dp[n] = 1

        for i in range(n - 1, -1, -1):
            if s[i] == "0":
                dp[i] = 0
            else:
                dp[i] = dp[i + 1]
                if i + 1 < n and 10 <= int(s[i:i+2]) <= 26:
                    dp[i] += dp[i + 2]

        return dp[0]

# Time:   O(n)
# Space:  O(n)
```

---

## 4) Bottom-Up Optimized (O(1) Space)

```python
class Solution:
    def numDecodings(self, s: str) -> int:
        n = len(s)
        prev2, prev1 = 1, 0

        for i in range(n - 1, -1, -1):
            if s[i] == "0":
                curr = 0
            else:
                curr = prev2
                if i + 1 < n and 10 <= int(s[i:i+2]) <= 26:
                    curr += prev1

            prev1, prev2 = prev2, curr

        return prev2

# Time:   O(n)
# Space:  O(1)
```
