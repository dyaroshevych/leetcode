from typing import List


class Solution:
    def canFormArray(self, nums: List[int], pieces: List[List[int]]) -> bool:
        nums_dct = {}

        for idx, num in enumerate(nums):
            nums_dct[num] = idx

        for piece in pieces:
            if piece[0] not in nums_dct:
                return False

            nums_idx = nums_dct[piece[0]] + 1

            for idx in range(1, len(piece)):
                if nums_idx == len(nums) or piece[idx] != nums[nums_idx]:
                    return False

                nums_idx += 1

        return True
