// INPUT: 4, [ 1, 3, 1, 2 ]
// OUTPUT: [ 1, 2 ]

const mostVisited = (N, rounds) => {
  if (rounds[0] <= rounds[rounds.length - 1]) {
    return new Array(rounds[rounds.length - 1] - rounds[0] + 1)
      .fill(0)
      .map((_, i) => rounds[0] + i);
  }

  return new Array(rounds[rounds.length - 1])
    .fill(0)
    .map((_, i) => i + 1)
    .concat(new Array(N - rounds[0] + 1).fill(0).map((_, i) => rounds[0] + i));
};

console.log(mostVisited(4, [1, 3, 1, 2]));
