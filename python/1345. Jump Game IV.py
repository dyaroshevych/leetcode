from typing import List, Dict


class Solution:
    def minJumps(self, nums: List[int]) -> int:
        available = self.get_available_positions(nums)
        visited_indices = set()
        visited_nums = set()
        curr_indices = set([0])
        num_steps = 0

        while curr_indices:
            visited_indices.update(curr_indices)
            next_indices = set()

            for pos in curr_indices:
                if pos == len(nums) - 1:
                    return num_steps

                if nums[pos] not in visited_nums:
                    for next_pos in available[nums[pos]]:
                        if next_pos not in visited_indices:
                            next_indices.add(next_pos)

                    visited_nums.add(nums[pos])

                for next_pos in self.get_neighbouring_indices(0, len(nums) - 1, pos):
                    if next_pos not in visited_indices:
                        next_indices.add(next_pos)

            curr_indices = next_indices
            num_steps += 1

    def get_available_positions(self, nums: List[int]) -> Dict[int, List[int]]:
        indices = {}

        for idx, num in enumerate(nums):
            if num not in indices:
                indices[num] = []

            indices[num].append(idx)

        return indices

    def get_neighbouring_indices(self, start: int, end: int, idx: int) -> List[int]:
        neighbours = []

        if idx > start:
            neighbours.append(idx - 1)

        if idx < end:
            neighbours.append(idx + 1)

        return neighbours
