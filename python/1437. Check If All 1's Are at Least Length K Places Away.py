from typing import List


class Solution:
    def kLengthApart(self, nums: List[int], k: int) -> bool:
        prev_pos = float('-inf')

        for pos, _ in enumerate(nums):
            if nums[pos] == 1:
                if pos - prev_pos <= k:
                    return False

                prev_pos = pos

        return True
