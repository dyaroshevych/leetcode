class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def rotateRight(self, head: ListNode, shift: int) -> ListNode:
        if (head is None):
            return None

        list_length = self.get_list_length(head)
        shift %= list_length

        if shift == 0:
            return head

        curr_node = head

        for _ in range(list_length - shift - 1):
            curr_node = curr_node.next

        new_head = curr_node.next
        curr_node.next = None
        curr_node = new_head

        while curr_node.next:
            curr_node = curr_node.next

        curr_node.next = head

        return new_head

    def get_list_length(self, head: ListNode) -> int:
        list_length = 0

        while head:
            head = head.next
            list_length += 1

        return list_length
