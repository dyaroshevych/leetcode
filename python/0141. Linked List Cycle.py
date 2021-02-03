# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        if head is None:
            return False

        p1 = head
        p2 = head.next

        while p1 != p2:
            p1 = p1.next

            if p2 and p2.next:
                p2 = p2.next.next
            else:
                return False

        return True
