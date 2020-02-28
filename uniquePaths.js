// INPUT: 7, 3
// OUTPUT: 28

const uniquePaths = (n, m) => {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m).fill(1);
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = m - 2; j >= 0; j--) {
      arr[i][j] = arr[i + 1][j] + arr[i][j + 1];
    }
  }

  return arr[0][0];
};

console.log(uniquePaths(7, 3));
