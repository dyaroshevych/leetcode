class Solution:
    def hammingWeight(self, n: int) -> int:
        weight = 0

        while n:
            weight += n & 1
            n >>= 1

        return weight
