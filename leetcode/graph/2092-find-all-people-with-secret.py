'''
1. Understand
“This solution uses Union-Find grouped by time, temporarily connecting participants at each timestamp and rolling back connections that don’t lead to secret propagation.”

Correct strategy (high-level)
Sort meetings by time
Process meetings grouped by the same time
For each time group:
- Union all participants in that time
- Check which connected components contain someone who knows the secret
- Only keep those unions
- Reset the rest
This preserves simultaneity correctly.

2. Diagram
3. Pseudocode
4. Code
5. BigO
   Time: O()
   Space: O()
'''
class Solution:
    def findAllPeople(self, n: int, meetings: List[List[int]], firstPerson: int) -> List[int]:
        i, parent = 0, list(range(n))
        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]
        def union(x, y): 
            parent[find(x)] = find(y)
        meetings.sort(key=lambda x: x[2])
        union(0, firstPerson)
        while i < len(meetings):
            people, time = set(), meetings[i][2]
            # All meetings at the same time are processed together as one time slice.
            # During this time slice, the secret can spread freely within the connected
            # components formed by these meetings.
            # Afterward, only people connected to person 0 (i.e., those who already had
            # access to the secret before this time slice) keep their connections;
            # all others are reset to prevent the secret from leaking across time.
            while i < len(meetings) and time == meetings[i][2]:
                x, y, _ = meetings[i]
                union(x, y); i+=1
                people.add(x); people.add(y)
            for p in people:
                if find(p) != find(0): parent[p] = p
        return [i for i in range(n) if find(i) == find(0)]
