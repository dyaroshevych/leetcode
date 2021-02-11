# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random


class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
        if head is None:
            return head

        # Step 1: Copy each node and place copies side-by-side
        node = head

        while node:
            copy = Node(node.val, node.next)
            node.next = copy
            node = copy.next

        # Step 2: Assign random pointers to copies
        node = head

        while node:
            node.next.random = node.random.next if node.random else None
            node = node.next.next

        # Step 3: Separate original list from a list of copies
        copy = head.next
        node = head.next.next

        while node:
            copy.next, node.next = node.next, node.next.next

            node = node.next
            copy = copy.next

        head_copy = head.next
        head.next = head.next.next

        return head_copy
