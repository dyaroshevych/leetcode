const hIndex = (citations) => {
  let start = 0,
    end = citations.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (citations[citations.length - mid - 1] >= mid + 1) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
};

console.log(hIndex([0, 1, 3, 5, 6]));
