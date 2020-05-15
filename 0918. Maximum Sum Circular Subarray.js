const maxSubarraySumCircular = (nums) => {
  let currMinSum = (currMaxSum = minSum = maxSum = numsSum = nums[0]);
  for (let i = 1; i < nums.length; i++) {
    numsSum += nums[i];

    currMaxSum = Math.max(currMaxSum + nums[i], nums[i]);
    currMinSum = Math.min(currMinSum + nums[i], nums[i]);

    maxSum = Math.max(maxSum, currMaxSum);
    minSum = Math.min(minSum, currMinSum);
  }

  return numsSum === minSum ? maxSum : Math.max(maxSum, numsSum - minSum);
};

console.log(maxSubarraySumCircular([5, -3, -2, 6, -1, 4]));
