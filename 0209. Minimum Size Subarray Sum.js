const minSubArrayLen = (threshold, nums) => {
  let currSum = 0;
  let minLength = Infinity;

  let start = 0;

  for (let end = 0; end < nums.length; end++) {
    currSum += nums[end];

    while (currSum >= threshold) {
      minLength = Math.min(minLength, end - start + 1);
      currSum -= nums[start++];
    }
  }

  if (minLength === Infinity) {
    return 0;
  }

  return minLength;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
