const minimumDeleteSum = (s1, s2) => {
  if (s1 === s2) return 0;

  const N = s1.length,
    M = s2.length;

  if (N === 0)
    return s2.split("").reduce((count, char) => count + char.charCodeAt(0), 0);
  if (M === 0)
    return s1.split("").reduce((count, char) => count + char.charCodeAt(0), 0);

  const dp = new Array(N + 1);
  dp[0] = new Array(M + 1);
  dp[0][0] = 0;

  for (let i = 1; i <= N; i++) {
    dp[i] = new Array(M + 1);
    dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
  }

  for (let i = 1; i <= M; i++) {
    dp[0][i] = dp[0][i - 1] + s2.charCodeAt(i - 1);
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (s1[i - 1] === s2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else
        dp[i][j] = Math.min(
          dp[i - 1][j] + s1.charCodeAt(i - 1),
          dp[i][j - 1] + s2.charCodeAt(j - 1)
        );
    }
  }

  return dp[N][M];
};

console.log(minimumDeleteSum("delete", "leet"));
