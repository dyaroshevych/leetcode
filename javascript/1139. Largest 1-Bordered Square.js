const largest1BorderedSquare = grid => {
  const hor = [];

  for (let i = 0; i < grid.length; i++) {
    hor.push([grid[i][0]]);
    for (let j = 1; j < grid[0].length; j++) {
      if (grid[i][j]) {
        hor[i][j] = hor[i][j - 1] + 1;
      } else {
        hor[i][j] = grid[i][j];
      }
    }
  }

  const ver = [[]];

  for (let i = 0; i < grid[0].length; i++) {
    ver[0].push(grid[0][i]);
  }

  for (let i = 1; i < grid.length; i++) {
    ver.push([]);
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        ver[i][j] = ver[i - 1][j] + 1;
      } else {
        ver[i][j] = grid[i][j];
      }
    }
  }

  let max = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let small = Math.min(hor[i][j], ver[i][j]);

      while (small > max) {
        if (hor[i - small + 1][j] >= small && ver[i][j - small + 1] >= small) {
          max = small;
        }
        small--;
      }
    }
  }

  return max * max;
};

console.log(
  largest1BorderedSquare([
    [1, 1, 1],
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
    [1, 1, 1]
  ])
);
