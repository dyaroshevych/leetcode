// INPUT: [ [ 3, 3 ], [ 5, -1 ], [ -2, 4 ] ], 2
// OUTPUT: [ [ 3, 3 ], [ -2, 4 ] ]

const kClosest = (points, k) =>
  points
    .sort(
      (point1, point2) =>
        Math.sqrt(point1[0] * point1[0] + point1[1] * point1[1]) -
        Math.sqrt(point2[0] * point2[0] + point2[1] * point2[1])
    )
    .splice(0, k);

console.log(
  kClosest(
    [
      [3, 3],
      [5, -1],
      [-2, 4],
    ],
    2
  )
);
