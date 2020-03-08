const maxSum = nums => {
  const getDigitSum = num => {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    return sum;
  };

  const sums = {};

  for (let i = 0; i < nums.length; i++) {
    const currentSum = getDigitSum(nums[i]);

    if (sums[currentSum]) {
      sums[currentSum].push(i);
    } else {
      sums[currentSum] = [i];
    }
  }

  let maxSum = -Infinity;

  for (let i of Object.keys(sums)) {
    if (sums[i].length > 1) {
      let max1 = (max2 = -Infinity);
      for (let j = 0; j < sums[i].length; j++) {
        if (max1 < nums[sums[i][j]]) {
          max2 = max1;
          max1 = nums[sums[i][j]];
        } else if (max2 < nums[sums[i][j]]) {
          max2 = nums[sums[i][j]];
        }
      }

      maxSum = Math.max(maxSum, max1 + max2);
    }
  }

  return maxSum === -Infinity ? -1 : maxSum;
};

console.log(maxSum([51, 71, 17, 42]));
