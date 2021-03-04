from typing import List


class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        return (1 + len(nums)) * len(nums) // 2 - sum(nums)
