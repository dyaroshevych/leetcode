const floodFill = (image, sr, sc, newColor) => {
  const oldColor = image[sr][sc];

  const fillNeighbours = (row, column) => {
    if (image[row][column] === oldColor) {
      image[row][column] = newColor;
      if (row > 0) fillNeighbours(row - 1, column);
      if (column > 0) fillNeighbours(row, column - 1);
      if (row < image.length - 1) fillNeighbours(row + 1, column);
      if (column < image[row].length - 1) fillNeighbours(row, column + 1);
    }
  };

  if (oldColor !== newColor) fillNeighbours(sr, sc);

  return image;
};

console.table(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
