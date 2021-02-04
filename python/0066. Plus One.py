from typing import List


class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        idx = len(digits) - 1

        temp = 1

        while idx >= 0:
            updated_digit = (digits[idx] + temp) % 10
            temp = (digits[idx] + temp) // 10

            digits[idx] = updated_digit
            idx -= 1

        if temp > 0:
            return [temp] + digits

        return digits
