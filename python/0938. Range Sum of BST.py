# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def rangeSumBST(self, root: TreeNode, low: int,
                    high: int) -> int:
        if root is None:
            return 0

        if root.val < low:
            sum_left = 0
        else:
            sum_left = self.rangeSumBST(root.left, low, high)

        if root.val > high:
            sum_right = 0
        else:
            sum_right = self.rangeSumBST(root.right, low, high)

        if low <= root.val <= high:
            sum_curr = root.val
        else:
            sum_curr = 0

        return sum_left + sum_curr + sum_right
