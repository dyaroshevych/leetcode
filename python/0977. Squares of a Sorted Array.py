from typing import List


class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        squares = [0] * len(nums)

        left = 0
        right = idx = len(nums) - 1

        while idx >= 0:
            squares[idx] = max(nums[left] ** 2, nums[right] ** 2)

            if squares[idx] == nums[left] ** 2:
                left += 1
            else:
                right -= 1

            idx -= 1

        return squares
