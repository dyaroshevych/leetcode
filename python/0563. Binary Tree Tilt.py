# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def findTilt(self, root: TreeNode) -> int:
        if root is None:
            return 0

        left_sum, left_tilt = self.find_sum_and_tilt(root.left)
        right_sum, right_tilt = self.find_sum_and_tilt(root.right)

        tilt = abs(left_sum - right_sum)

        return tilt + left_tilt + right_tilt

    def find_sum_and_tilt(self, root: TreeNode) -> int:
        if root is None:
            return 0, 0

        left_sum, left_tilt = self.find_sum_and_tilt(root.left)
        right_sum, right_tilt = self.find_sum_and_tilt(root.right)

        tree_sum = left_sum + root.val + right_sum
        tree_tilt = left_tilt + right_tilt + abs(left_sum - right_sum)

        return tree_sum, tree_tilt
