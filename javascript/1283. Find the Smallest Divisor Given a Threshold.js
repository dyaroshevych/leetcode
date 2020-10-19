// INPUT: [ 1, 2, 5, 9 ], 6
// OUTPUT: 5

const isBelowThreshould = (nums, threshold, divisor) => {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += Math.ceil(nums[i] / divisor);
  }

  return sum <= threshold;
};

const smallestDivisor = (nums, threshold) => {
  let left = 1;
  let right = Math.max(...nums);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (isBelowThreshould(nums, threshold, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(smallestDivisor([1, 2, 5, 9], 6));
