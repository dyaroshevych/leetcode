const canSplitWithMaxSum = (nums, M, maxSum) => {
  let partsCount = 1;
  let currSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (currSum + nums[i] > maxSum) {
      partsCount++;
      currSum = 0;
    }

    currSum += nums[i];
  }

  return partsCount <= M;
};

const splitArray = (nums, M) => {
  let max = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
    sum += nums[i];
  }

  let left = max;
  let right = sum;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (canSplitWithMaxSum(nums, M, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(splitArray([7, 2, 5, 10, 8], 2));
