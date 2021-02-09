class Solution:
    def kidsWithCandies(self, candies: List[int], extra: int) -> List[bool]:
        max_elem = max(candies)

        return [candy + extra >= max_elem for candy in candies]
