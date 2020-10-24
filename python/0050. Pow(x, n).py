class Solution:
    def myPow(self, x: float, n: int) -> float:
        if x == 0:
            return x

        if n < 0:
            return self.myPow(1 / x, -n)

        result = 1
        curr_pow = x

        while n:
            if n & 1:
                result *= (n & 1) * curr_pow
            curr_pow *= curr_pow
            n >>= 1

        return result
