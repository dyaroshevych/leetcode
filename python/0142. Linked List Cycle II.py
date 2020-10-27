class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
        if not head:
            return None

        p1 = p2 = head

        while p1 and p2:
            p1 = p1.next

            if not p2.next:
                break

            p2 = p2.next.next

            if p1 == p2:
                break

        if p1 != p2:
            return None

        p3 = head

        while p1 != p3:
            p1 = p1.next
            p3 = p3.next

        return p1
