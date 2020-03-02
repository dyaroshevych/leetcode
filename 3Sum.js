const threeSum = nums => {
  const pairs = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      const targetSum = 0 - nums[i];

      let start = i + 1,
        end = nums.length - 1;

      while (start < end) {
        if (nums[start] + nums[end] > targetSum) {
          end--;
        } else if (nums[start] + nums[end] < targetSum) {
          start++;
        } else {
          pairs.push([nums[i], nums[start], nums[end]]);
          do {
            start++;
          } while (nums[start - 1] === nums[start]);
          do {
            end--;
          } while (nums[end] === nums[end + 1]);
        }
      }
    }
  }

  return pairs;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
