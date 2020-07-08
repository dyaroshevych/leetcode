// INPUT: [ [ 10, 20 ], [ 30, 200 ], [ 400, 50 ], [ 30, 20 ] ]
// OUTPUT: 110

const twoCitySchedCost = (costs) => {
  costs.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));

  let total = 0;
  for (let i = 0; i < costs.length / 2; i++) {
    total += costs[i][1] + costs[costs.length - i - 1][0];
  }

  return total;
};

console.log(
  twoCitySchedCost([
    [10, 20],
    [30, 200],
    [400, 50],
    [30, 20],
  ])
);
