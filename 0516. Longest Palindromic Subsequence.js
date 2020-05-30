const longestPalindromeSubseq = (str) => {
  const N = str.length,
    dp = new Array(N);

  for (let i = 0; i < N; i++) {
    dp[i] = new Array(N);
    dp[i][i] = 1;
  }

  for (let i = 1; i < N; i++) dp[i][i - 1] = 0;

  for (let len = 1; len < N; len++) {
    for (let i = 0; i < N - len; i++) {
      let j = i + len;

      if (str[i] === str[j]) dp[i][j] = 2 + dp[i + 1][j - 1];
      else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
    }
  }

  return dp[0][N - 1];
};

console.log(longestPalindromeSubseq("bbbab"));
