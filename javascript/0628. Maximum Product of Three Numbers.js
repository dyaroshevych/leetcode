const maximumProduct = (nums) => {
  const maxNums = nums.slice(0, 3).sort((a, b) => a - b);
  const minNums = nums.slice(0, 3).sort((a, b) => b - a);

  for (let i = 3; i < nums.length; i++) {
    if (nums[i] > maxNums[0]) {
      maxNums[0] = nums[i];
      maxNums.sort((a, b) => a - b);
    } else if (nums[i] < minNums[0]) {
      minNums[0] = nums[i];
      minNums.sort((a, b) => b - a);
    }
  }

  return Math.max(
    maxNums[0] * maxNums[1] * maxNums[2],
    maxNums[2] * minNums[1] * minNums[2],
    minNums[0] * minNums[1] * minNums[2]
  );
};

console.log(maximumProduct([1, 2, 3, 4]));
