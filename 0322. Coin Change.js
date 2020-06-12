// INPUT: [ 1, 2, 5 ], 11
// OUTPUT: 3

const coinChange = (coins, amount) => {
  const dp = new Array(amount + 1);

  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    let min = Infinity;
    for (let coin of coins) {
      if (dp[i - coin] >= 0) min = Math.min(min, dp[i - coin] + 1);
    }

    dp[i] = min;
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));
