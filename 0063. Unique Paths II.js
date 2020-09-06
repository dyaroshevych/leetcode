// O(N*M) time | O(M) space
const uniquePathsWithObstacles = (grid) => {
  const pathsCount = new Array(2);

  for (let i = 0; i < 2; i++) {
    pathsCount[i] = new Array(grid[0].length + 1).fill(0);
  }

  pathsCount[grid.length % 2][grid[0].length - 1] = 1;

  for (let i = grid.length - 1; i >= 0; i--) {
    for (let j = grid[0].length - 1; j >= 0; j--) {
      if (grid[i][j] === 1) {
        pathsCount[i % 2][j] = 0;
      } else {
        pathsCount[i % 2][j] =
          pathsCount[(i + 1) % 2][j] + pathsCount[i % 2][j + 1];
      }
    }
  }

  return pathsCount[0][0];
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
