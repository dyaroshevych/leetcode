from collections import deque

# Definition for a binary tree node.


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def getTargetCopy(self, original: TreeNode, cloned: TreeNode, target: TreeNode) -> TreeNode:
        nodes_original = deque([original])
        nodes_cloned = deque([cloned])

        while len(nodes_cloned):
            for _ in range(len(nodes_cloned)):
                node_original = nodes_original.popleft()
                node_cloned = nodes_cloned.popleft()

                if node_original is target:
                    return node_cloned

                if node_cloned is None:
                    continue

                nodes_original.append(node_original.left)
                nodes_original.append(node_original.right)

                nodes_cloned.append(node_cloned.left)
                nodes_cloned.append(node_cloned.right)
