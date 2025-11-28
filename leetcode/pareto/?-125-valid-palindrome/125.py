'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time:  O()
Space: O()
'''
class Solution:
    def isPalindrome(self, s: str) -> bool:
        l, r = 0, len(s)-1
        while l < r:
            while l < r and not s[l].isalnum():
                l+=1
            while l < r and not s[r].isalnum():
                r-=1
            if s[l].lower() != s[r].lower():
                return False
            l+=1
            r-=1
        return True
'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time:  O()
Space: O()
'''
