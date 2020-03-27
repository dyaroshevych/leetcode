const spiralOrder = matrix => {
  if (!matrix.length) return [];

  const n = matrix[0].length,
    m = matrix.length,
    result = [];

  let count = 1,
    left = (top = 0),
    right = n - 1,
    bottom = m - 1;

  while (count <= n * m) {
    let i = left;
    while (i <= right) {
      result.push(matrix[top][i]);
      i++;
      if (++count > n * m) return result;
    }
    top++;

    i = top;
    while (i <= bottom) {
      result.push(matrix[i][right]);
      i++;
      if (++count > n * m) return result;
    }
    right--;

    i = right;
    while (i >= left) {
      result.push(matrix[bottom][i]);
      i--;
      if (++count > n * m) return result;
    }
    bottom--;

    i = bottom;
    while (i >= top) {
      result.push(matrix[i][left]);
      i--;
      if (++count > n * m) return result;
    }
    left++;
  }

  return result;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
