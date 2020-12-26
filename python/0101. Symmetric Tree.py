# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        if root is None:
            return True

        return self.is_mirrored(root.left, root.right)

    def is_mirrored(self, node_1: TreeNode, node_2: TreeNode) -> bool:
        if node_1 is None and node_2 is None:
            return True

        if node_1 is None or node_2 is None:
            return False

        is_val_equal = node_1.val == node_2.val
        is_left_equal = self.is_mirrored(node_1.left, node_2.right)
        is_right_equal = self.is_mirrored(node_1.right, node_2.left)

        return is_val_equal and is_left_equal and is_right_equal
