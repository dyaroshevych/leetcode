from typing import List


class Solution:
    def findKthPositive(self, nums: List[int], idx: int) -> int:
        if nums[-1] - len(nums) < idx:
            return len(nums) + idx

        low = 0
        high = len(nums) - 1

        while low < high:
            mid = (low + high) // 2

            if nums[mid] - mid <= idx:
                low = mid + 1
            else:
                high = mid

        return low + idx
