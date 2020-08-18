const jump = (nums) => {
  if (nums.length <= 1) {
    return 0;
  }

  let jumpsCount = 1;
  let currMaxIndex = nums[0];
  let nextMaxIndex = 0;

  for (let i = 1; i < nums.length - 1; i++) {
    nextMaxIndex = Math.max(nextMaxIndex, i + nums[i]);

    if (i === currMaxIndex) {
      currMaxIndex = nextMaxIndex;
      jumpsCount++;
    }
  }

  return jumpsCount;
};

console.log(jump([2, 3, 1, 1, 4]));
