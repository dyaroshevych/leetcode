from typing import List


class Solution:
    def longestMountain(self, heights: List[int]) -> int:
        max_len = 0
        base = 0

        while base < len(heights):
            end = base

            if end + 1 < len(heights) and heights[end] < heights[end + 1]:
                end += 1

                while end + 1 < len(heights) and heights[end] < heights[end + 1]:
                    end += 1

                if end + 1 < len(heights) and heights[end] > heights[end + 1]:
                    while end + 1 < len(heights) and heights[end] > heights[end + 1]:
                        end += 1

                    max_len = max(max_len, end - base + 1)

            base = max(base + 1, end)

        return max_len
