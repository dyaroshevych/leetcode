# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeTwoLists(self, list_1: ListNode, list_2: ListNode) -> ListNode:
        if list_1 is None or list_2 is None:
            return list_1 or list_2

        node = prehead = ListNode()

        while list_1 is not None and list_2 is not None:
            if list_1.val > list_2.val:
                list_1, list_2 = list_2, list_1

            node.next = list_1
            node = list_1
            list_1 = list_1.next

        node.next = list_1 or list_2

        return prehead.next
