from typing import List


class Solution:
    def minStartValue(self, nums: List[int]) -> int:
        min_start_val = 0
        curr = 0

        for num in nums:
            curr += num

            if curr < 1:
                min_start_val += 1 - curr
                curr = 1

        return max(1, min_start_val)
