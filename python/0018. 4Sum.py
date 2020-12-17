from typing import List


class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        nums.sort()
        results = []

        for idx_1 in range(len(nums) - 3):
            if idx_1 != 0 and nums[idx_1 - 1] == nums[idx_1]:
                continue

            for idx_2 in range(idx_1 + 1, len(nums) - 2):
                if nums[idx_2 - 1] == nums[idx_2] and idx_1 + 1 != idx_2:
                    continue

                local_target = target - nums[idx_1] - nums[idx_2]

                left = idx_2 + 1
                right = len(nums) - 1

                while left < right:
                    curr_sum = nums[left] + nums[right]

                    if curr_sum == local_target:
                        results.append(
                            [nums[idx_1], nums[idx_2], nums[left], nums[right]])
                        left += 1
                        right -= 1

                        while left < right and nums[left - 1] == nums[left]:
                            left += 1

                        while left < right and nums[right] == nums[right + 1]:
                            right -= 1
                    elif curr_sum < local_target:
                        left += 1
                    else:
                        right -= 1

        return results
