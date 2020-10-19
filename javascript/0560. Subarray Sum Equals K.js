// INPUT: [ 1, 1, 1 ]
// OUTPUT: 2

const subarraySumQuadraticTime = (nums, k) => {
  const sums = [];
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    sums.push(currentSum);
    currentSum += nums[i];
  }

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (sums[j] - sums[i] + nums[j] === k) result++;
    }
  }

  return result;
};

const subarraySum = (nums, k) => {
  const sums = {};

  let currentSum = (result = 0);
  for (let i = 0; i < nums.length; i++) {
    if (sums[currentSum]) {
      sums[currentSum]++;
    } else {
      sums[currentSum] = 1;
    }
    currentSum += nums[i];
    if (sums[currentSum - k]) {
      result += sums[currentSum - k];
    }
  }

  return result;
};

console.log(subarraySum([1, 1, 1], 2));
