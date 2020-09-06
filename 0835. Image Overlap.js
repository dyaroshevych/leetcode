// INPUT: [[1,1,0],[0,1,0],[0,1,0]], [[0,0,0],[0,1,1],[0,0,1]]
// OUTPUT: 3

const largestOverlap = (matrixA, matrixB) => {
  const N = matrixA.length;

  let maxOverlap = 0;

  for (let i = -N + 1; i < N; i++) {
    for (let j = -N + 1; j < N; j++) {
      maxOverlap = Math.max(maxOverlap, getOverlap(matrixA, matrixB, i, j));
    }
  }

  return maxOverlap;
};

const getOverlap = (matrixA, matrixB, shiftI, shiftJ) => {
  const N = matrixA.length;

  const startA = [Math.max(0, shiftI), Math.max(0, shiftJ)];
  let shiftILength = N - Math.abs(shiftI);
  let shiftJLength = N - Math.abs(shiftJ);

  let overlapCount = 0;

  for (let i = 0; i < shiftILength; i++) {
    for (let j = 0; j < shiftJLength; j++) {
      const valA = matrixA[i + startA[0]][j + startA[1]];
      const valB = matrixB[i + startA[0] - shiftI][j + startA[1] - shiftJ];

      if (valA && valB) {
        overlapCount++;
      }
    }
  }

  return overlapCount;
};

console.log(
  largestOverlap(
    [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    [
      [0, 0, 0],
      [0, 1, 1],
      [0, 0, 1],
    ]
  )
);
