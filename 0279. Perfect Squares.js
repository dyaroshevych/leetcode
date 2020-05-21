const numSquares = (num) => {
  const dp = [0, 1];

  for (let i = 2; i <= num; i++) {
    const max = Math.floor(Math.sqrt(i));

    let minValue = dp[i - 1] + 1;
    for (let j = 2; j <= max; j++) {
      minValue = Math.min(dp[i - j * j] + 1, minValue);
    }

    dp.push(minValue);
  }

  return dp[num];
};

console.log(numSquares(12));
