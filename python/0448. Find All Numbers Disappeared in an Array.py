from typing import List


class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        missing = []

        for num in nums:
            if nums[abs(num) - 1] > 0:
                nums[abs(num) - 1] = - nums[abs(num) - 1]

        for idx, _ in enumerate(nums):
            if nums[idx] > 0:
                missing.append(idx + 1)

        return missing
