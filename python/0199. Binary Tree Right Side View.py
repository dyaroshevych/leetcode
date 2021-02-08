
from typing import List
from collections import deque


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def rightSideView(self, root: TreeNode) -> List[int]:
        if root is None:
            return []

        level = deque([root])
        right_view = []

        while len(level):
            right_view.append(level[-1].val)

            for _ in range(len(level)):
                node = level.popleft()

                if node.left:
                    level.append(node.left)
                if node.right:
                    level.append(node.right)

        return right_view
