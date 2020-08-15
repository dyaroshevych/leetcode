const getIndex = (arr, right, value) => {
  let left = -1;

  while (left < right) {
    const mid = Math.ceil((left + right) / 2);

    if (arr[mid] < value) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

const maxEnvelopes = (envelopes) => {
  if (envelopes.length === 0) {
    return 0;
  }

  envelopes.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }

    return b[1] - a[1];
  });

  const lastHeights = new Array(envelopes.length);

  lastHeights[0] = envelopes[0][1];

  let length = 1;

  for (let i = 1; i < envelopes.length; i++) {
    if (envelopes[i][1] > lastHeights[length - 1]) {
      lastHeights[length++] = envelopes[i][1];
    } else {
      const index = getIndex(lastHeights, length - 1, envelopes[i][1]);

      lastHeights[index + 1] = envelopes[i][1];
    }
  }

  return length;
};

console.log(
  maxEnvelopes([
    [5, 4],
    [6, 4],
    [6, 7],
    [2, 3],
  ])
);
