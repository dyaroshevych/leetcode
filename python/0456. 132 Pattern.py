from collections import deque
from typing import List


class Solution:
    def find132pattern(self, nums: List[int]) -> bool:
        curr_min = float('inf')
        mins = [0] * len(nums)

        for i, _ in enumerate(nums):
            curr_min = min(curr_min, nums[i])
            mins[i] = curr_min

        stack = deque()

        for i in range(len(nums) - 1, -1, -1):
            if nums[i] > mins[i]:
                if len(stack) and stack[-1] < nums[i]:
                    while len(stack) and stack[-1] <= mins[i]:
                        stack.pop()

                    if len(stack) and nums[i] > stack[-1]:
                        return True

                stack.append(nums[i])

        return False
