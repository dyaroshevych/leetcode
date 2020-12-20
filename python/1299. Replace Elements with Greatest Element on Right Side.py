from typing import List


class Solution:
    def replaceElements(self, nums: List[int]) -> List[int]:
        prev = nums[-1]

        for idx in range(2, len(nums) + 1):
            temp = nums[-idx]
            nums[-idx] = max(prev, nums[-idx + 1])
            prev = temp

        nums[-1] = -1

        return nums
