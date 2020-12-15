from typing import List


class Solution:
    def checkIfExist(self, nums: List[int]) -> bool:
        visited = set()

        for num in nums:
            if num * 2 in visited or num / 2 in visited:
                return True

            visited.add(num)

        return False
