from typing import List


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        if len(lists) == 0:
            return None

        while len(lists) > 1:
            next_lists = []

            for i in range(0, len(lists) - len(lists) % 2, 2):
                merged_list = self.merge_two_lists(lists[i], lists[i + 1])
                next_lists.append(merged_list)

            if len(lists) % 2:
                next_lists.append(lists[len(lists) - 1])

            lists = next_lists

        return lists[0]

    def merge_two_lists(self, list1: ListNode, list2: ListNode) -> ListNode:
        if not (list1 and list2):
            return list1 or list2

        if list1.val > list2.val:
            return self.merge_two_lists(list2, list1)

        node1 = list1
        node2 = list2

        while node1.next and node2:
            if node1.next.val <= node2.val:
                node1 = node1.next
            else:
                temp1 = node1.next
                node1.next = node2

                temp2 = node2.next
                node2.next = temp1
                node1 = node2
                node2 = temp2

        if node2:
            node1.next = node2

        return list1
