const spiralMatrixIII = (n, m, nstart, mstart) => {
  const coordinates = [];

  let left = (right = mstart),
    top = (bottom = nstart),
    count = 1;

  while (count <= n * m) {
    if (top >= 0) {
      for (let i = Math.max(left, 0); i <= Math.min(right, m - 1); i++) {
        coordinates.push([top, i]);
        count++;
        if (count > n * m) return coordinates;
      }
    }
    right++;

    if (right < m) {
      for (let i = Math.max(top, 0); i <= Math.min(bottom, n - 1); i++) {
        coordinates.push([i, right]);
        count++;
        if (count > n * m) return coordinates;
      }
    }
    bottom++;

    if (bottom < n) {
      for (let i = Math.min(right, m - 1); i >= Math.max(left, 0); i--) {
        coordinates.push([bottom, i]);
        count++;
        if (count > n * m) return coordinates;
      }
    }
    left--;

    if (left >= 0) {
      for (let i = Math.min(bottom, n - 1); i >= Math.max(top, 0); i--) {
        coordinates.push([i, left]);
        count++;
        if (count > n * m) return coordinates;
      }
    }
    top--;
  }

  return coordinates;
};

console.log(spiralMatrixIII(5, 6, 1, 4));
