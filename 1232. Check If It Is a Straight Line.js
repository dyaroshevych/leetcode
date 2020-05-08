const checkStraightLine = (coordinates) => {
  // y = kx + b
  const k =
      coordinates[0][1] === coordinates[1][1]
        ? 0
        : (coordinates[1][1] - coordinates[0][1]) /
          (coordinates[1][0] - coordinates[0][0]),
    b = coordinates[0][1] - coordinates[0][0] * k;

  for (let i = 1; i < coordinates.length; i++) {
    if (coordinates[i][1] !== k * coordinates[i][0] + b) return false;
  }

  return true;
};

console.log(
  checkStraightLine([
    [0, 1],
    [1, 3],
    [-4, -7],
    [5, 11],
  ])
);
