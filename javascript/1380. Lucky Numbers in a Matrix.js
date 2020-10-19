// INPUT: [
//   [ 1, 10, 4, 2 ],
//   [ 9, 3, 8, 7 ],
//   [ 15, 16, 17, 12 ]
// ]
// OUTPUT: [ 12 ]

const luckyNumbers = (matrix) => {
  const minRows = new Set(),
    maxColumns = new Array(matrix[0].length).fill(-Infinity);
  for (let i = 0; i < matrix.length; i++) {
    let currentMinRow = Infinity;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < currentMinRow) {
        currentMinRow = matrix[i][j];
      }
      if (matrix[i][j] > maxColumns[j]) {
        maxColumns[j] = matrix[i][j];
      }
    }
    minRows.add(currentMinRow);
  }

  let luckyNums = [];
  for (let i = 0; i < maxColumns.length; i++) {
    if (minRows.has(maxColumns[i])) luckyNums.push(maxColumns[i]);
  }

  return luckyNums;
};

console.log(
  luckyNumbers([
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12],
  ])
);
