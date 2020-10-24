from typing import List


class Solution:
    def canReach(self, nums: List[int], start: int) -> bool:
        curr_positions = set([start])
        visited = set()

        for _ in range(len(nums)):
            next_positions = set()

            for pos in curr_positions:
                if pos in visited:
                    continue

                if nums[pos] == 0:
                    return True

                visited.add(pos)

                if pos - nums[pos] >= 0:
                    next_positions.add(pos - nums[pos])

                if pos + nums[pos] < len(nums):
                    next_positions.add(pos + nums[pos])

            curr_positions = next_positions

        return False
