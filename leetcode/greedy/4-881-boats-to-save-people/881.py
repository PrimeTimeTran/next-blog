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
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people.sort()
        i, j = 0, len(people) - 1
        boats = 0

        while i <= j:
            if people[i] + people[j] <= limit:
                i += 1   # lightest paired
            j -= 1       # heaviest always goes
            boats += 1

        return boats
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
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people.sort(reverse=True)
        i, j = 0, len(people) - 1
        while i <= j:
            if people[i] + people[j] <= limit: j -= 1
            i += 1
        return i
'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time:  O()
Space: O()
'''
