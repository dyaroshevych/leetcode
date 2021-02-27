class Solution:
    def countBalls(self, low_limit: int, high_limit: int) -> int:
        """
        Determine maximum number of balls in a box where
        balls' numbers are in range [low_limit, high_limit].
        """
        boxes = {}

        for num in range(low_limit, high_limit + 1):
            digit_sum = self.count_digit_sum(num)

            if digit_sum not in boxes:
                boxes[digit_sum] = 1
            else:
                boxes[digit_sum] += 1

        return max(boxes.values())

    def count_digit_sum(self, num: int) -> int:
        """
        Count sum of digits of a non-negative integer.
        """
        digit_sum = 0

        while num > 0:
            digit_sum += num % 10
            num //= 10

        return digit_sum
