const maxUncrossedLines = (A, B) => {
  const dp = new Array(A.length)
    .fill(0)
    .map((element) => new Array(B.length).fill(-1));

  const getLinesCount = (i, j) => {
    if (i >= A.length || j >= B.length) return 0;

    if (dp[i][j] !== -1) return dp[i][j];

    if (A[i] === B[j]) return (dp[i][j] = 1 + getLinesCount(i + 1, j + 1));

    return (dp[i][j] = Math.max(
      getLinesCount(i + 1, j),
      getLinesCount(i, j + 1)
    ));
  };

  return getLinesCount(0, 0);
};

console.log(maxUncrossedLines([2, 1], [1, 2, 1, 3, 3, 2]));
