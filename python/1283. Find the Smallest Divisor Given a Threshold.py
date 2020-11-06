from typing import List
import math


class Solution:
    def smallestDivisor(self, nums: List[int], threshold: int) -> int:
        left = 1
        right = max(nums)

        while left < right:
            mid = (left + right) // 2

            curr_sum = 0

            for num in nums:
                curr_sum += math.ceil(num / mid)

            if curr_sum <= threshold:
                right = mid
            else:
                left = mid + 1

        return left
