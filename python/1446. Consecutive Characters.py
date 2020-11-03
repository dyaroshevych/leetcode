class Solution:
    def maxPower(self, s: str) -> int:
        max_count = 0

        curr_char = None
        curr_count = 0

        for char in s:
            if char == curr_char:
                curr_count += 1
                continue

            max_count = max(max_count, curr_count)
            curr_char = char
            curr_count = 1

        return max(max_count, curr_count)
