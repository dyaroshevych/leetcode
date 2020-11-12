from typing import List
import copy


class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        perms = []
        nums.sort()

        self.permute(perms, [], nums)

        return perms

    def permute(self, perms, curr: List[int], rest: List[int]) -> None:
        if len(rest) == 0:
            perms.append(copy.copy(curr))
            return None

        prev_num = float('-inf')

        for idx, num in enumerate(rest, 0):
            if num != prev_num:
                curr.append(num)

                self.permute(perms, curr, rest[:idx] + rest[idx + 1:])

                curr.pop()

            prev_num = num
