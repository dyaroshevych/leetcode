const orangesRotting = (grid) => {
  let freshCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) freshCount++;
    }
  }

  let daysCount = 0;
  let prevFreshCount = freshCount;

  while (freshCount > 0) {
    daysCount++;

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === daysCount + 1) {
          freshCount -=
            rot(grid, i - 1, j, daysCount) +
            rot(grid, i + 1, j, daysCount) +
            rot(grid, i, j - 1, daysCount) +
            rot(grid, i, j + 1, daysCount);
        }
      }
    }

    if (prevFreshCount === freshCount) {
      return -1;
    }

    prevFreshCount = freshCount;
  }

  return daysCount;
};

const rot = (grid, i, j, days) => {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    grid[i][j] !== 1
  ) {
    return 0;
  }

  grid[i][j] = days + 2;

  return 1;
};

// const orangesRotting = (grid) => {
//   let daysCount = 0;

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       if (grid[i][j] === 1) {
//         let currDistance = getMinDistanceToRottenOrange(grid, new Set(), i, j);

//         if (currDistance === Infinity) {
//           return -1;
//         }

//         daysCount = Math.max(daysCount, currDistance);
//       }
//     }
//   }

//   return daysCount;
// };

// const getMinDistanceToRottenOrange = (grid, visited, i, j) => {
//   if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
//     return Infinity;
//   }

//   if (grid[i][j] === 2) {
//     return 0;
//   }

//   const key = `${i}_${j}`;

//   if (visited.has(key) || grid[i][j] === 0) {
//     return Infinity;
//   }

//   visited.add(key);

//   let currMinDistance =
//     Math.min(
//       getMinDistanceToRottenOrange(grid, visited, i - 1, j),
//       getMinDistanceToRottenOrange(grid, visited, i + 1, j),
//       getMinDistanceToRottenOrange(grid, visited, i, j - 1),
//       getMinDistanceToRottenOrange(grid, visited, i, j + 1)
//     ) + 1;

//   visited.delete(key);

//   return currMinDistance;
// };

console.log(
  orangesRotting([
    [0, 1, 1, 2],
    [0, 1, 1, 0],
    [1, 1, 2, 0],
  ])
);
