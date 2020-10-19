// INPUT: [ 2, 1 ], [ 1, 2, 1, 3, 3, 2 ]
// OUTPUT: 2

const getLinesCount = (dp, lineA, lineB, i, j) => {
  if (i >= lineA.length || j >= lineB.length) return 0;

  if (dp[i][j] !== -1) return dp[i][j];

  if (lineA[i] === lineB[j]) {
    dp[i][j] = 1 + getLinesCount(dp, lineA, lineB, i + 1, j + 1);
  } else {
    dp[i][j] = Math.max(
      getLinesCount(dp, lineA, lineB, i + 1, j),
      getLinesCount(dp, lineA, lineB, i, j + 1)
    );
  }

  return dp[i][j];
};

const maxUncrossedLines = (A, B) => {
  const dp = new Array(A.length);

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(B.length).fill(-1);
  }

  return getLinesCount(dp, A, B, 0, 0);
};

console.log(maxUncrossedLines([2, 1], [1, 2, 1, 3, 3, 2]));
