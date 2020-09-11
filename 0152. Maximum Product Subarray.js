const maxProduct = (nums) => {
  let currMin = nums[0];
  let currMax = nums[0];

  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [currMin, currMax] = [currMax, currMin];
    }

    currMin = Math.min(nums[i], currMin * nums[i]);
    currMax = Math.max(nums[i], currMax * nums[i]);

    max = Math.max(max, currMax);
  }

  return max;
};

console.log(maxProduct([2, 3, -2, 4]));
