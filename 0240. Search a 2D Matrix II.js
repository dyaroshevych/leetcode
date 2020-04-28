// INPUT: [
//     [ 1, 4, 7, 11, 15 ],
//     [ 2, 5, 8, 12, 19 ],
//     [ 3, 6, 9, 16, 22 ],
//     [ 10, 13, 14, 17, 24 ],
//     [ 18, 21, 23, 26, 30 ],
//    ],
//    20
// OUTPUT: false

const searchMatrix = (matrix, target) => {
  if (matrix.length === 0) return false;

  let currRow = 0,
    currColumn = matrix[0].length - 1;

  while (currRow < matrix.length && currColumn >= 0) {
    if (matrix[currRow][currColumn] < target) currRow++;
    else if (matrix[currRow][currColumn] > target) currColumn--;
    else return true;
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    20
  )
);
