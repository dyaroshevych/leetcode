const minDistance = (word1, word2) => {
  if (word1 === word2) return 0;

  const N = word1.length,
    M = word2.length;

  if (N === 0) return M;
  if (M === 0) return N;

  const dp = new Array(N + 1);

  for (let i = 0; i <= N; i++) {
    dp[i] = new Array(M + 1);
    dp[i][0] = i;
  }

  for (let i = 1; i <= M; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
    }
  }

  return dp[N][M];
};

console.log(minDistance("intention", "execution"));
