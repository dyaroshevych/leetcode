from typing import List


class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        nums.reverse()
        k %= len(nums)

        for i in range(k // 2):
            nums[i], nums[k - i - 1] = nums[k - i - 1], nums[i]

        for i in range(k, k + (len(nums) - k) // 2):
            nums[i], nums[len(nums) - i + k -
                          1] = nums[len(nums) - i + k - 1], nums[i]
