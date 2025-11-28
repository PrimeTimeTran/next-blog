'''
1. Understand
Use a slow and fast pointer to detect a cycle in a linked list.

2. Diagram
3. Pseudocode
4. Code
5. BigO
   Time: O()
   Space: O()
'''
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        s, f = head, head
        while f and f.next:
            s = s.next
            f = f.next.next
            if s == f:
                return True
        return False
