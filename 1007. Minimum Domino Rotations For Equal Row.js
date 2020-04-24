const minDominoRotations = (arr1, arr2) => {
  let countA1 = 0,
    countA2 = arr1[0] === arr2[0] ? 0 : 1,
    countB1 = arr1[0] === arr2[0] ? 0 : 1,
    countB2 = 0;

  for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] !== arr1[0] && arr2[i] !== arr1[0]) {
      countA1 = Infinity;
      countB1 = Infinity;
    } else if (arr1[i] !== arr1[0]) {
      countA1++;
    } else if (arr2[i] !== arr1[0]) {
      countB1++;
    }

    if (arr1[i] !== arr2[0] && arr2[i] !== arr2[0]) {
      countA2 = Infinity;
      countB2 = Infinity;
    } else if (arr1[i] !== arr2[0]) {
      countA2++;
    } else if (arr2[i] !== arr2[0]) {
      countB2++;
    }
  }

  if (
    countA1 === Infinity &&
    countA2 === Infinity &&
    countB1 === Infinity &&
    countB2 === Infinity
  )
    return -1;
  return Math.min(countA1, countA2, countB1, countB2);
};

console.log(
  minDominoRotations([1, 2, 1, 1, 1, 2, 2, 2], [2, 1, 2, 2, 2, 2, 2, 2])
);
