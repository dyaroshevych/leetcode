from typing import List


class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        ranges = []

        num_idx = 0

        while num_idx < len(nums):
            curr_range_start = nums[num_idx]

            while num_idx < len(nums) - 1 and nums[num_idx] + 1 == nums[num_idx + 1]:
                num_idx += 1

            if curr_range_start == nums[num_idx]:
                curr_range = str(curr_range_start)
            else:
                curr_range = f'{curr_range_start}->{nums[num_idx]}'

            ranges.append(curr_range)
            num_idx += 1

        return ranges
