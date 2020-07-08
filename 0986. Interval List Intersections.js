// INPUT: [ [ 1, 2 ],
// [ 5, 5 ],
// [ 8, 10 ],
// [ 15, 23 ],
// [ 24, 24 ],
// [ 25, 25 ] ]
// OUTPUT: [ [ 0, 2 ], [ 5, 10 ], [ 13, 23 ], [ 24, 25 ] ] [ [ 1, 5 ], [ 8, 12 ], [ 15, 24 ], [ 25, 26 ] ]

const intervalIntersection = (A, B) => {
  let pointer1 = (pointer2 = 0);

  const intervals = [];

  while (pointer1 < A.length && pointer2 < B.length) {
    const start = Math.max(A[pointer1][0], B[pointer2][0]),
      end = Math.min(A[pointer1][1], B[pointer2][1]);

    if (start <= end) intervals.push([start, end]);

    if (A[pointer1][1] < B[pointer2][1]) pointer1++;
    else pointer2++;
  }

  return intervals;
};

console.log(
  intervalIntersection(
    [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ],
    [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ]
  )
);

console.log(
  [
    [0, 2],
    [5, 10],
    [13, 23],
    [24, 25],
  ],
  [
    [1, 5],
    [8, 12],
    [15, 24],
    [25, 26],
  ]
);
