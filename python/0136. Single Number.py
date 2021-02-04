from typing import List


class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        check = 0

        for num in nums:
            check ^= num

        return check
