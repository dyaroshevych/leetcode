// INPUT: 5
// OUTPUT: [
//       [1],
//      [1,1],
//     [1,2,1],
//    [1,3,3,1],
//   [1,4,6,4,1]
//  ]

const generate = (numRows) => {
  if (numRows === 0) {
    return [];
  }
  const triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    const row = [1];
    for (let j = 1; j < i; j++) {
      row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
    }
    row.push(1);
    triangle.push(row);
  }

  return triangle;
};

console.log(generate(5));
