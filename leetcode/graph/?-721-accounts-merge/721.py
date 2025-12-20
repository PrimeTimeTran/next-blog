'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:   O()
Space:  O()
'''
class Solution:
    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:
        parent, res, components, email_to_name = {}, [], defaultdict(list), {}
        def find(x):
            if x != parent[x]:
                parent[x] = find(parent[x])
            return parent[x]
        def union(x, y):
            parent[find(x)] = find(y)
        
        for account in accounts:
            name, emails = account[0], account[1:]
            for email in emails:
                if email not in parent:
                    parent[email] = email
                    email_to_name[email] = name
            # Union all emails in the account
            for i in range(1, len(emails)):
                union(emails[0], emails[i])
        # Group emails by their root parent
        for email in parent:
            components[find(email)].append(email)
        for root, emails in components.items():
            res.append([email_to_name[root]] + sorted(emails))
        return res
'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:   O()
Space:  O()
'''
from itertools import groupby
class Solution:
    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:
        parent, email_to_name = {}, {}

        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]

        def union(x, y):
            parent[find(x)] = find(y)

        # Initialize parent and name mapping, and union emails
        for account in accounts:
            name, emails = account[0], account[1:]
            for email in emails:
                if email not in parent:
                    parent[email] = email
                    email_to_name[email] = name
            for i in range(1, len(emails)):
                union(emails[0], emails[i])

        # Sort emails by root
        emails_sorted = sorted(parent.keys(), key=find)
        
        res = []
        for root, group in groupby(emails_sorted, key=find):
            res.append([email_to_name[root]] + sorted(group))
        
        return res
