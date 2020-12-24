# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        prev = ListNode(next=head)
        new_head = prev
        node = head

        while node and node.next:
            temp = node.next.next
            node.next.next = node
            prev.next = node.next
            node.next = temp

            prev = node
            node = node.next

        return new_head.next
