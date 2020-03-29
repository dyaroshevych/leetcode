const rotate = matrix => {
  if (matrix.length === 0) return matrix;

  for (let i = 0; i < matrix.length / 2; i++) {
    const temp = matrix[i];
    matrix[i] = matrix[matrix.length - i - 1];
    matrix[matrix.length - i - 1] = temp;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  return matrix;
};

console.table(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
