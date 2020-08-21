// INPUT: 3, 3, 5
// OUTPUT: 3

const hasKNumbersLessThanItself = (height, width, K, num) => {
  let count = 0;

  for (let i = 1; i <= height; i++) {
    count += Math.min(Math.floor(num / i), width);
  }

  return count >= K;
};

const findKthNumber = (height, width, K) => {
  let left = 1;
  let right = height * width;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (hasKNumbersLessThanItself(height, width, K, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(findKthNumber(3, 3, 5));
