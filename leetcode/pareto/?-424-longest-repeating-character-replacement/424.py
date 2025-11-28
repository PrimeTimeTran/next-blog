'''
## Similar
🔹 487. Max Consecutive Ones II
https://leetcode.com/problems/max-consecutive-ones-ii
Premium: True
🔹 340. Longest Substring with At Most K Distinct Characters
https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters
Premium: True
🔹 159. Longest Substring with At Most Two Distinct Characters
https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters
Premium: True

🔹 1493. Longest Subarray of 1’s After Deleting One Element
https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
🔹 1004. Max Consecutive Ones III
https://leetcode.com/problems/max-consecutive-ones-iii
🔹 438. Find All Anagrams in a String
https://leetcode.com/problems/find-all-anagrams-in-a-string
🔹 424 → 2958. Length of Longest Subarray With at Most K Frequency
https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency
🔹 1838. Frequency of the Most Frequent Element
https://leetcode.com/problems/frequency-of-the-most-frequent-element
🔹 76. Minimum Window Substring
https://leetcode.com/problems/minimum-window-substring

'''

'''
1. Understand
“Is there some character that appears often enough that I can fix the rest with ≤ k changes?”
"maxf lets you reason about possibility instead of identity."

"We use a sliding window and track character frequencies and the maximum frequency seen (maxf).
The window is valid if its size minus maxf is at most k (the number of replacements needed).
We expand the window greedily, shrink it only when this 
condition is violated, and record the largest window size encountered."


maxf lets us ignore which character we’re converting to, 
and instead reason only about how many characters already agree.

"maxf tracks the highest frequency of any character seen so far in the window.
This allows us to compute the minimum number of replacements needed without 
knowing which character we replace everything with.
Since the problem only asks for the maximum length, not the actual substring, the identity of 
the character is irrelevant."

2. Diagram
s = "ABAB", k = 2

Window: "A"        length = 1       (l=0, r=0)     
w = {'A': 1}
maxf = 1

replacements needed = 1 - 1 = 0 <= k

Window: "AB"       length = 2       (l=0, r=1)     
w = {'A': 1, 'B': 1}
maxf = 1

replacements needed = 2 - 1 = 1 <= k

Window: "ABA"      length = 3       (l=0, r=2)     
w = {'A': 2, 'B': 1}
maxf = 2

replacements needed = 3 - 2 = 1 <= k

Window: "ABAB"     length = 4       (l=0, r=3)     
w = {'A': 2, 'B': 2}
maxf = 2

replacements needed = 4 - 2 = 2 <= k

3. Pseudocode
4. Code
5. Big O
Time:  O()
Space: O()
'''
class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        maxf, res, l, win = 0, 0, 0, {}
        for r, c in enumerate(s):
            win[c] = win.get(c, 0) + 1
            maxf = max(maxf, win[c])
            while (r-l+1) - maxf > k:
                win[s[l]] -= 1
                l += 1
            res = max(res, r-l + 1)
        return res
'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time:  O()
Space: O()
'''
