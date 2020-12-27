# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def maxDepth(self, root: TreeNode, depth: int = 0) -> int:
        if root is None:
            return depth

        depth += 1

        return max(self.maxDepth(root.left, depth), self.maxDepth(root.right, depth))
