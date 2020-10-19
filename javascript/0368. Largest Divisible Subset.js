const largestDivisibleSubset = (nums) => {
  if (nums.length === 0) return [];

  nums.sort((a, b) => a - b);

  const dp = new Array(nums.length).fill(1),
    parents = new Array(nums.length);

  parents[0] = 0;

  let max = 1,
    maxIdx = 0;

  for (let i = 1; i < nums.length; i++) {
    parents[i] = i;

    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        parents[i] = j;

        if (dp[i] > max) {
          max = dp[i];
          maxIdx = i;
        }
      }
    }
  }

  const result = [];
  while (parents[maxIdx] !== maxIdx) {
    result.unshift(nums[maxIdx]);
    maxIdx = parents[maxIdx];
  }

  result.unshift(nums[maxIdx]);

  return result;
};

console.log(largestDivisibleSubset([3, 4, 16, 8]));
