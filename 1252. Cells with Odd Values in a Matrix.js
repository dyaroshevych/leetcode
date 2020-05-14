// INPUT: 2, 3, [ [ 0, 1 ], [ 1, 1 ] ]
// OUTPUT: 6

const oddCells = (rows, cols, indices) => {
  const rowsCount = new Array(rows).fill(0),
    colsCount = new Array(cols).fill(0);

  for (let index of indices) {
    rowsCount[index[0]]++;
    colsCount[index[1]]++;
  }

  let oddRowsCount = (oddColsCount = 0);
  for (let rowCount of rowsCount) if (rowCount % 2) oddRowsCount++;
  for (let colCount of colsCount) if (colCount % 2) oddColsCount++;

  return (
    oddRowsCount * (cols - oddColsCount) + (rows - oddRowsCount) * oddColsCount
  );
};

console.log(
  oddCells(2, 3, [
    [0, 1],
    [1, 1],
  ])
);
