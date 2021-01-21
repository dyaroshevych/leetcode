from typing import List


class Solution:
    def mostCompetitive(self, nums: List[int], k: int) -> List[int]:
        stack = []

        for idx, num in enumerate(nums):
            while len(stack) and stack[-1] > num and len(stack) + len(nums) - idx > k:
                stack.pop()

            if len(stack) < k:
                stack.append(num)

        return stack
