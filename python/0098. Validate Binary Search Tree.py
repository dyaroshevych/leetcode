from numbers import Number


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isValidBST(self, root: TreeNode,
                   min_val: Number = float('-inf'),
                   max_val: Number = float('inf')) -> bool:
        if root is None:
            return True

        if not (min_val < root.val < max_val):
            return False

        return self.isValidBST(root.left, min_val, min(max_val, root.val)) and \
            self.isValidBST(root.right, max(min_val, root.val), max_val)
