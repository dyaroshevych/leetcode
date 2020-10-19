const insert = (intervals, newInterval) => {
  if (intervals.length === 0 || newInterval[1] < intervals[0][0]) {
    intervals.unshift(newInterval);

    return intervals;
  }

  if (intervals[intervals.length - 1][1] < newInterval[0]) {
    intervals.push(newInterval);

    return intervals;
  }

  let start = 0;

  while (start < intervals.length && newInterval[0] > intervals[start][1]) {
    start++;
  }

  let len = 0;
  let currEnd = newInterval[1];

  while (
    start + len < intervals.length &&
    currEnd >= intervals[start + len][0]
  ) {
    currEnd = Math.max(currEnd, intervals[start + len][1]);
    len++;
  }

  intervals.splice(start, len, [
    Math.min(newInterval[0], intervals[start][0]),
    currEnd,
  ]);

  return intervals;
};

console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);
