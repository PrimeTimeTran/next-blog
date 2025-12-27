'''
1. Understand
Greedy.
5. Big O
Time:   O()
Space:  O()
'''
class Solution:
    def checkValidString(self, s: str) -> bool:
        # leftMin = minimum possible number of '(' that are unmatched
        # leftMax = maximum possible number of '(' that are unmatched
        # The idea: '*' can act as '(' or ')' or empty, so we track a range
        leftMin = leftMax = 0

        for c in s:
            if c == "(":
                # '(' increases both min and max unmatched '('
                leftMin += 1
                leftMax += 1
            elif c == ")":
                # ')' decreases unmatched '('
                leftMin -= 1    # at least this many '(' can be matched
                leftMax -= 1    # at most this many '(' could be unmatched
            else:  # c == '*'
                # '*' can be '(', ')' or empty:
                # min unmatched '(' decreases (treat '*' as ')')
                # max unmatched '(' increases (treat '*' as '(')
                leftMin -= 1
                leftMax += 1

            # If at any point, max unmatched '(' < 0, 
            # there are too many ')' → invalid
            if leftMax < 0: return False
            # leftMin should never go below 0 (can't have negative unmatched '(')
            if leftMin < 0:
                leftMin = 0
        return leftMin == 0
