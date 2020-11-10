# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def maxAncestorDiff(self, root: TreeNode) -> int:
        return self.get_max_diff(root, root.val, root.val)

    def get_max_diff(self, node: TreeNode, curr_min: int, curr_max: int) -> int:
        if node is None:
            return curr_max - curr_min

        curr_min = min(curr_min, node.val)
        curr_max = max(curr_max, node.val)

        left_max_diff = self.get_max_diff(node.left, curr_min, curr_max)
        right_max_diff = self.get_max_diff(node.right, curr_min, curr_max)

        return max(left_max_diff, right_max_diff)
