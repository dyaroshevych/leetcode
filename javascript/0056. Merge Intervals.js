// INPUT: [ [ 1, 3 ], [ 2, 6 ], [ 8, 10 ],  [ 15, 18 ] ]
// OUTPUT: [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]

const merge = (intervals) => {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => (a[0] < b[0] ? -1 : a[0] === b[0] ? 0 : 1));
  const result = [intervals[0]];

  for (let currInterval of intervals) {
    if (currInterval[0] > result[result.length - 1][1]) {
      result.push(currInterval);
    } else {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        currInterval[1]
      );
    }
  }

  return result;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
