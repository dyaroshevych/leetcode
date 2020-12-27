from typing import List
from collections import deque


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
        if root is None:
            return []

        level = deque([root])
        nodes = []

        is_reversed = False

        while len(level) > 0:
            nodes.append([])

            for _ in range(len(level)):
                node = level.popleft()

                nodes[-1].append(node.val)

                if node.left is not None:
                    level.append(node.left)
                if node.right is not None:
                    level.append(node.right)

            if is_reversed:
                nodes[-1] = list(reversed(nodes[-1]))

            is_reversed = not is_reversed

        return nodes
