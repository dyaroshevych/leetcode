const findTargetSumWaysRecursive = (nums, sum) => {
  let count = 0;

  const addNumber = (currSum, idx) => {
    if (idx === nums.length - 1) {
      if (currSum + nums[idx] === sum) count++;
      if (currSum - nums[idx] === sum) count++;
      return;
    }

    addNumber(currSum + nums[idx], idx + 1);
    addNumber(currSum - nums[idx], idx + 1);
  };

  addNumber(0, 0);

  return count;
};

const findTargetSumWays = (nums, sum) => {
  const memo = {};

  const addNumber = (currSum, idx) => {
    if (idx === nums.length) return Number(currSum === sum);

    if (memo[idx] && memo[idx][currSum]) return memo[idx][currSum];

    const resultsSum =
      addNumber(currSum + nums[idx], idx + 1) +
      addNumber(currSum - nums[idx], idx + 1);

    if (resultsSum) {
      if (memo[idx] && memo[idx][currSum]) memo[idx][currSum] += resultsSum;
      else if (memo[idx]) memo[idx][currSum] = resultsSum;
      else memo[idx] = { [currSum]: resultsSum };

      return memo[idx][currSum];
    }

    return 0;
  };

  addNumber(0, 0);

  return addNumber(0, 0);
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
