class Solution:
    def reverse(self, num: int) -> int:
        if num < 0:
            sign = -1
            num = -num
        else:
            sign = 1

        reversed_num = 0

        while num > 0:
            reversed_num = reversed_num * 10 + num % 10
            num //= 10

        reversed_num *= sign

        if -2 ** 31 <= reversed_num < 2 ** 31:
            return reversed_num

        return 0
