'''
1. Understand
Find the mid of the linked list, reverse the second half, then merge the two halves.




2. Diagram
3. Pseudocode
4. Code
5. BigO
   Time: O()
   Space: O()
'''
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        d = ListNode(0, head)
        s, f = d, d
        # Ensures no overlapping nodes in both lists when we do f.next and f.next.next
        # ListNode{val: 2, next: ListNode{val: 3, next: ListNode{val: 4, next: None}}} ListNode{val: 3, next: ListNode{val: 4, next: None}}
        
        # If we did f and f.next, then for even length lists, we would end up with s at the start of the second half
        # ListNode{val: 3, next: ListNode{val: 4, next: None}} None
        while f.next and f.next.next:
            s = s.next
            f = f.next.next
        
        # Reverse the second half(we researched half way by using above logic)
        prev = None
        while s:
            nxt, s.next = s.next, prev
            prev, s = s, nxt

        l1, reversed_half = head, prev
        while l1 and reversed_half:
            tmp1, tmp2 = l1.next, reversed_half.next
            # Crux right here
            # We want to update l1.next to be reversed half & reversed half to be l1.next
            l1.next, reversed_half.next = reversed_half, tmp1
            # But then we still want to update l1 and reversed half to be the "next"
            l1, reversed_half = tmp1, tmp2
