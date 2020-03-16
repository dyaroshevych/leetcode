// INPUT: [1, 2, 3, 1]
// OUTPUT: 4

const robLinearSpace = nums => {
  const dp = [[0, 0]];

  for (let i = 1; i <= nums.length; i++) {
    dp.push([0, 0]);
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
    dp[i][1] = dp[i - 1][0] + nums[i - 1];
  }

  return Math.max(dp[nums.length][0], dp[nums.length][1]);
};

const rob = nums => {
  let prevNo = 0,
    prevYes = 0;

  for (let i = 1; i <= nums.length; i++) {
    const temp = Math.max(prevNo, prevYes);
    prevYes = prevNo + nums[i - 1];
    prevNo = temp;
  }

  return Math.max(prevNo, prevYes);
};

console.log(rob([1, 2, 3, 1]));
