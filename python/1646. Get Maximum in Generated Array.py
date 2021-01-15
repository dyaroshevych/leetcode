class Solution:
    def getMaximumGenerated(self, n: int) -> int:
        nums = [0, 1]

        if n in (0, 1):
            return nums[n]

        for idx in range(2, n + 1):
            if idx % 2:
                nums.append(nums[idx // 2] + nums[idx // 2 + 1])
            else:
                nums.append(nums[idx // 2])

        return max(nums)
