from typing import Tuple


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def subtreeWithAllDeepest(self, root: TreeNode) -> TreeNode:
        def helper(root: TreeNode) -> Tuple[int, TreeNode]:
            if root is None:
                return 0, None

            h_left, lca_left = helper(root.left)
            h_right, lca_right = helper(root.right)

            if h_left > h_right:
                return h_left + 1, lca_left

            if h_left < h_right:
                return h_right + 1, lca_right

            return h_left + 1, root

        return helper(root)[1]
