from typing import List


class Solution:
    def minCostToMoveChips(self, positions: List[int]) -> int:
        sum_even = sum_odd = 0

        for pos in positions:
            if pos % 2:
                sum_odd += 1
            else:
                sum_even += 1

        return min(sum_odd, sum_even)
