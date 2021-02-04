from typing import List


class Solution:
    def findLHS(self, nums: List[int]) -> int:
        counts = {}

        for num in nums:
            if num in counts:
                counts[num] += 1
            else:
                counts[num] = 1

        max_len = 0

        for num, count in counts.items():
            if num - 1 in counts:
                max_len = max(max_len, count + counts[num - 1])

        return max_len
