'''
1. Understand
Create slow and fast pointers then move fast pointer n steps ahead.
Next move both pointers until fast pointer reaches the end.
At this point, slow pointer will be at the node before the one we want to remove.
Then we can just skip the next node of slow pointer.

2. Diagram
3. Pseudocode
4. Code
5. BigO
   Time: O()
   Space: O()
'''
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        d = ListNode(0, head)
        s = f = d
        while n > 0:
            f = f.next
            n -= 1
        while f and f.next:
            s = s.next
            f = f.next
        s.next = s.next.next
        return d.next
