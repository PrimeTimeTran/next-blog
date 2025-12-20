# ✅ 300. Longest Increasing Subsequence

## 1) Brute Force (Plain Recursion)

```python
# Time:   O(2ⁿ)
# Space:  O(n)

class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        def dfs(i, prev):
            if i == len(nums):
                return 0

            skip = dfs(i + 1, prev)

            take = 0
            if nums[i] > prev:
                take = 1 + dfs(i + 1, nums[i])

            return max(skip, take)

        return dfs(0, float("-inf"))
```

---

## 2) Top-Down with Memo

```python
# Time:   O(n²)
# Space:  O(n²)

class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        memo = {}

        def dp(i, prev_idx):
            if i == len(nums):
                return 0
            if (i, prev_idx) in memo:
                return memo[(i, prev_idx)]

            skip = dp(i + 1, prev_idx)

            take = 0
            if prev_idx == -1 or nums[i] > nums[prev_idx]:
                take = 1 + dp(i + 1, i)

            memo[(i, prev_idx)] = max(skip, take)
            return memo[(i, prev_idx)]

        return dp(0, -1)
```

---

## 3) Bottom-Up with Tabulation

```python
# Time:   O(n²)
# Space:  O(n)

class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [1] * n

        for i in range(n):
            for j in range(i):
                if nums[i] > nums[j]:
                    dp[i] = max(dp[i], dp[j] + 1)

        return max(dp) if dp else 0
```

---

## 4) Bottom-Up Optimized (Binary Search)

```python
# Time:   O(n log n)
# Space:  O(n)

class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        from bisect import bisect_left

        tails = []

        for num in nums:
            idx = bisect_left(tails, num)
            if idx == len(tails):
                tails.append(num)
            else:
                tails[idx] = num

        return len(tails)
```
