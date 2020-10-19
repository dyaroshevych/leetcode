const countSubstrings = (str) => {
  const N = str.length;

  if (N <= 1) return N;

  const dp = new Array(N);

  for (let i = 0; i < N; i++) {
    dp[i] = new Array(N);
    dp[i][i] = 1;
  }

  let count = N;
  for (let i = 1; i < N; i++) {
    dp[i][i - 1] = 0;
    if (str[i - 1] === str[i]) {
      dp[i - 1][i] = 1;
      count++;
    }
  }

  for (let shift = 1; shift < N; shift++) {
    for (let i = 0; i + shift < N; i++) {
      const j = shift + i;

      if (str[i] === str[j] && dp[i + 1][j - 1]) {
        count++;
        dp[i][j] = 1;
      }
    }
  }

  return count;
};

console.log(countSubstrings("aaa"));
