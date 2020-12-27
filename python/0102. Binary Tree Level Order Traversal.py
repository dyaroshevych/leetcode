from typing import List
from collections import deque


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if root is None:
            return []

        level = deque([root])
        nodes_lst = []

        while len(level) > 0:
            nodes_lst.append([])

            for _ in range(len(level)):
                node = level.popleft()

                nodes_lst[-1].append(node.val)

                if node.left is not None:
                    level.append(node.left)
                if node.right is not None:
                    level.append(node.right)

        return nodes_lst
