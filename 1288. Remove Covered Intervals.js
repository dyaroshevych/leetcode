// Calculate the number of remaining intervals after removal
// of the ones that are completely covered by the other ones.
const removeCoveredIntervals = (intervals) => {
  // sort intervals by ascending start point or by descending end point
  intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  let currIndex = 0;
  let numDeletedIntervals = 0;

  // repeat while there are intervals that might be covered by current interval
  while (currIndex + 1 < intervals.length) {
    let currStartIndex = currIndex;

    // increase current index while current interval is covered by the current starting one
    do {
      currIndex++;
    } while (
      currIndex < intervals.length &&
      intervals[currIndex][1] <= intervals[currStartIndex][1]
    );

    // update counter of deleted intervals
    numDeletedIntervals += currIndex - currStartIndex - 1;
  }

  return intervals.length - numDeletedIntervals;
};
