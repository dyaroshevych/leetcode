from typing import List
from math import ceil


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def sortedArrayToBST(self, nums: List[int], start: int = None, end: int = None) -> TreeNode:
        if start is None:
            start = 0
            end = len(nums) - 1

        if start > end:
            return None

        mid = ceil((start + end) / 2)
        node = TreeNode(nums[mid])

        node.left = self.sortedArrayToBST(nums, start, mid - 1)
        node.right = self.sortedArrayToBST(nums, mid + 1, end)

        return node
