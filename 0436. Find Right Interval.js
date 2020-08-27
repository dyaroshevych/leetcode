const findRightInterval = (intervals) => {
  const sortedIntervals = intervals.map((interval, idx) => {
    return {
      start: interval[0],
      index: idx,
    };
  });

  sortedIntervals.sort((a, b) => a.start - b.start);

  const results = [];

  for (let i = 0; i < intervals.length; i++) {
    let left = 0;
    let right = intervals.length;

    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);

      if (sortedIntervals[mid].start < intervals[i][1]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    results[i] = left === intervals.length ? -1 : sortedIntervals[left].index;
  }

  return results;
};

console.log(
  findRightInterval([
    [3, 4],
    [2, 3],
    [1, 2],
  ])
);
