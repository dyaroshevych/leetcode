from typing import List


class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        start = 0
        end = len(nums) - 1

        while start < end:
            if nums[start] % 2 > nums[end] % 2:
                nums[start], nums[end] = nums[end], nums[start]

            if nums[start] % 2 == 0:
                start += 1
            if nums[end] % 2 == 1:
                end -= 1

        return nums
