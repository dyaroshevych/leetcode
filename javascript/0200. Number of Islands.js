// INPUT: [
//   [ "1", "1", "1", "1", "0" ],
//   [ "1", "1", "0", "1", "0" ],
//   [ "1", "1", "0", "0", "0" ],
//   [ "0", "0", "0", "0", "1" ],
// ]
// OUTPUT: 2

const numIslands = (grid) => {
  const clearIsland = (i, j) => {
    if (grid[i][j] === "0") {
      return;
    }
    grid[i][j] = "0";
    if (i > 0) {
      clearIsland(i - 1, j);
    }
    if (i < grid.length - 1) {
      clearIsland(i + 1, j);
    }
    if (j > 0) {
      clearIsland(i, j - 1);
    }
    if (j < grid[0].length - 1) {
      clearIsland(i, j + 1);
    }
  };

  let islandCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        islandCount++;
        clearIsland(i, j);
      }
    }
  }

  return islandCount;
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "1"],
  ])
);
