# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def convertBST(self, root: TreeNode) -> TreeNode:
        curr_sum = 0

        nodes = []
        curr = root

        while True:
            while curr is not None:
                nodes.append(curr)
                curr = curr.right

            if len(nodes) == 0:
                break

            curr = nodes.pop()

            curr_sum += curr.val
            curr.val = curr_sum

            curr = curr.left

        return root
