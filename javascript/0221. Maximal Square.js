const maximalSquare = (matrix) => {
  if (matrix.length === 0) return 0;

  const dp = new Array(2);
  for (let i = 0; i < 2; i++) dp[i] = new Array(matrix[0].length);

  let maxArea = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === "0") dp[i % 2][j] = 0;
      else {
        dp[i % 2][j] =
          Math.min(
            i > 0 ? dp[(i - 1) % 2][j] : 0,
            j > 0 ? dp[i % 2][j - 1] : 0,
            i > 0 && j > 0 ? dp[(i - 1) % 2][j - 1] : 0
          ) + 1;

        maxArea = Math.max(maxArea, dp[i % 2][j] * dp[i % 2][j]);
      }
    }
  }

  return maxArea;
};

console.log(
  maximalSquare([
    ["1", "0", "1", "1", "0", "1"],
    ["1", "1", "1", "1", "1", "1"],
    ["0", "1", "1", "0", "1", "1"],
    ["1", "1", "1", "0", "1", "0"],
    ["0", "1", "1", "1", "1", "1"],
    ["1", "1", "0", "1", "1", "1"],
  ])
);
