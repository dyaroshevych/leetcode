// O(logN) time | O(logN) space
const atMostNGivenDigitSet = (digits, N) =>
  getCountWithLessNumOfDigits(N, digits.length) +
  getCountWithSameNumOfDigits(digits, String(N), 0);

const getCountWithLessNumOfDigits = (N, numDigits) => {
  if (N < 10) {
    return 0;
  }

  let currCount = 1;
  let count = 0;

  let N1 = Math.floor(N / 10);

  while (N1 > 0) {
    currCount *= numDigits;
    count += currCount;

    N1 = Math.floor(N1 / 10);
  }

  return count;
};

const getCountWithSameNumOfDigits = (digits, N, currIdx) => {
  if (currIdx === N.length) {
    return 1;
  }

  let count = 0;
  let digitIdx = 0;

  while (digitIdx < digits.length && digits[digitIdx] < N[currIdx]) {
    count += digits.length ** (N.length - currIdx - 1);
    digitIdx++;
  }

  if (digitIdx < digits.length && digits[digitIdx] === N[currIdx]) {
    count += getCountWithSameNumOfDigits(digits, N, currIdx + 1);
  }

  return count;
};

console.log(atMostNGivenDigitSet(["1", "3", "5", "7"], 100));
