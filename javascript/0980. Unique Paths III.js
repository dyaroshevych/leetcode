// INPUT: [
//   [1, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 2, -1],
// ]
// OUTPUT: 2

const uniquePathsIII = (grid) => {
  let numNonObstacles = 0;

  let startRow = null;
  let startCol = null;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] >= 0) {
        numNonObstacles++;

        if (grid[row][col] === 1) {
          startRow = row;
          startCol = col;
        }
      }
    }
  }

  return backtrack(grid, startRow, startCol, numNonObstacles);
};

// -2: visited
// -1: obstacle
// 0: empty
// 1: start
// 2: finish
const backtrack = (grid, row, col, remain) => {
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[0].length ||
    grid[row][col] < 0
  ) {
    return 0;
  }

  if (grid[row][col] === 2) {
    return remain === 1 ? 1 : 0;
  }

  const temp = grid[row][col];
  grid[row][col] = -2;
  remain--;

  let pathsCount = 0;

  for (let shift = -1; shift <= 1; shift += 2) {
    pathsCount +=
      backtrack(grid, row + shift, col, remain) +
      backtrack(grid, row, col + shift, remain);
  }

  grid[row][col] = temp;

  return pathsCount;
};

console.log(
  uniquePathsIII([
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 2, -1],
  ])
);
