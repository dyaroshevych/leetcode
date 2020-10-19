// INPUT: 5, [ 1, 2, 5 ]
// OUTPUT: 4

const change = (target, coins) => {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  coins.forEach((coin) => {
    for (let i = coin; i <= target; i++) dp[i] += dp[i - coin];
  });

  return dp[target];
};

console.log(change(5, [1, 2, 5]));
