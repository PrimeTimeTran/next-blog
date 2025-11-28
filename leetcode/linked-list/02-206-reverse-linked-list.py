'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
   Time: O()
   Space: O()
'''
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        while head:
            nxt = head.next
            head.next = prev
            prev = head
            head = nxt
        return prev
