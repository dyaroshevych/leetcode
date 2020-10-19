const findLongestChain = (pairs) => {
  if (pairs.length === 0) {
    return 0;
  }

  pairs.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  });

  let countThrowaways = 0;
  let lastPair = pairs[0];

  for (let i = 1; i < pairs.length; i++) {
    if (lastPair[1] < pairs[i][0]) {
      lastPair = pairs[i];
    } else {
      countThrowaways++;

      if (lastPair[1] > pairs[i][1]) {
        lastPair = pairs[i];
      }
    }
  }

  return pairs.length - countThrowaways;
};

console.log(
  findLongestChain([
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
