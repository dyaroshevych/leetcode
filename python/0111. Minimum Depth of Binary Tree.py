from collections import deque


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def minDepth(self, root: TreeNode) -> int:
        if root is None:
            return 0

        queue = deque([root])
        depth = 1

        while len(queue):
            for _ in range(len(queue)):
                node = queue.popleft()

                if node is None:
                    continue

                if node.left is None and node.right is None:
                    return depth

                queue.append(node.left)
                queue.append(node.right)

            depth += 1

        return depth
