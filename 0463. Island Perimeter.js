const islandPerimeter = (grid) => {
  let islandCount = (neighbourCount = 0);

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column] === 1) {
        islandCount++;

        if (row < grid.length - 1 && grid[row + 1][column]) neighbourCount++;
        if (column < grid[0].length - 1 && grid[row][column + 1])
          neighbourCount++;
      }
    }
  }

  return islandCount * 4 - neighbourCount * 2;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
