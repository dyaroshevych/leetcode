from typing import List


class Solution:
    def validMountainArray(self, nums: List[int]) -> bool:
        idx = 0

        while idx + 1 < len(nums) and nums[idx] < nums[idx + 1]:
            idx += 1

        if idx in (0, len(nums) - 1):
            return False

        while idx + 1 < len(nums) and nums[idx] > nums[idx + 1]:
            idx += 1

        return idx == len(nums) - 1
