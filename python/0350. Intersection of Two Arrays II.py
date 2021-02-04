from typing import List


class Solution:
    def intersect(self, nums_1: List[int], nums_2: List[int]) -> List[int]:
        counts = {}

        for num in nums_1:
            if num not in counts:
                counts[num] = 0

            counts[num] += 1

        intersection = []

        for num in nums_2:
            if num not in counts:
                continue

            intersection.append(num)
            counts[num] -= 1

            if counts[num] == 0:
                del counts[num]

        return intersection
