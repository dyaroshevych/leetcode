# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, head_1: ListNode, head_2: ListNode) -> ListNode:
        head = None
        remainder = 0

        while head_1 and head_2:
            val = (head_1.val + head_2.val + remainder) % 10
            remainder = (head_1.val + head_2.val + remainder) // 10

            head = ListNode(val, head)

            head_1 = head_1.next
            head_2 = head_2.next

        while head_1:
            val = (head_1.val + remainder) % 10
            remainder = (head_1.val + remainder) // 10

            head = ListNode(val, head)
            head_1 = head_1.next

        while head_2:
            val = (head_2.val + remainder) % 10
            remainder = (head_2.val + remainder) // 10

            head = ListNode(val, head)
            head_2 = head_2.next

        if remainder:
            head = ListNode(remainder, head)

        return self.reverse(head)

    def reverse(self, head: ListNode) -> ListNode:
        if head is None:
            return None

        prev = None

        while head.next:
            temp = head.next
            head.next = prev
            prev = head
            head = temp

        head.next = prev

        return head
