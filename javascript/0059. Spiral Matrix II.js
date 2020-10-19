const generateMatrix = n => {
  const matrix = new Array(n);

  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(n);
  }

  let count = 1,
    left = (top = 0),
    right = (bottom = n - 1);

  while (count <= n * n) {
    let i = left;
    while (i <= right) {
      matrix[top][i] = count++;
      i++;
      if (count > n * n) return matrix;
    }
    top++;

    i = top;
    while (i <= bottom) {
      matrix[i][right] = count++;
      i++;
      if (count > n * n) return matrix;
    }
    right--;

    i = right;
    while (i >= left) {
      matrix[bottom][i] = count++;
      i--;
      if (count > n * n) return matrix;
    }
    bottom--;

    i = bottom;
    while (i >= top) {
      matrix[i][left] = count++;
      i--;
      if (count > n * n) return matrix;
    }
    left++;
  }

  return matrix;
};

console.log(generateMatrix(3));
