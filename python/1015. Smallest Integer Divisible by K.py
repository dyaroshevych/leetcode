class Solution:
    def smallestRepunitDivByK(self, K: int) -> int:
        remainder = 1
        length = 1

        while remainder % K != 0:
            remainder = (remainder * 10 + 1) % K
            length += 1

            if length > K:
                return -1

        return length
