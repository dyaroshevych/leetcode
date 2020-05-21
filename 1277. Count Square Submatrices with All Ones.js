const countSquaresUnefficient = (matrix) => {
  const N = matrix.length,
    M = matrix[0].length;

  const neighboursCount = new Array(N);

  for (let i = 0; i < N; i++) {
    neighboursCount[i] = [];
    for (let j = 0; j < M; j++) {
      neighboursCount[i].push([
        i > 0 && matrix[i][j] ? neighboursCount[i - 1][j][0] + 1 : matrix[i][j],
        j > 0 && matrix[i][j] ? neighboursCount[i][j - 1][1] + 1 : matrix[i][j],
      ]);
    }
  }

  let count = 0;
  for (let i = N - 1; i >= 0; i--) {
    for (let j = M - 1; j >= 0; j--) {
      let maxPossibleDimensions = Math.min(...neighboursCount[i][j]),
        maxDimensions = matrix[i][j];

      while (maxPossibleDimensions > 1) {
        maxPossibleDimensions = Math.min(
          maxPossibleDimensions - 1,
          ...neighboursCount[i - maxDimensions][j - maxDimensions]
        );
        if (maxPossibleDimensions) maxDimensions++;
      }

      count += maxDimensions;
    }
  }

  return count;
};

const countSquares = (matrix) => {
  let count = matrix[0][0];
  for (let i = 1; i < matrix.length; i++) count += matrix[i][0];

  for (let j = 1; j < matrix[0].length; j++) count += matrix[0][j];

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        matrix[i][j] += Math.min(
          matrix[i - 1][j],
          matrix[i][j - 1],
          matrix[i - 1][j - 1]
        );
        count += matrix[i][j];
      }
    }
  }

  return count;
};

console.log(
  countSquares([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
  ])
);
