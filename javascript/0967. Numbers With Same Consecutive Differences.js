// INPUT: N = 3, K = 7
// OUTPUT: [ 181, 292, 707, 818, 929 ]

const generateNums = (nums, length, diff, currNum, currLength) => {
  if (length === currLength) {
    nums.push(currNum);
    return;
  }

  const prevDigit = currNum % 10;

  if (prevDigit - diff >= 0) {
    generateNums(
      nums,
      length,
      diff,
      currNum * 10 + prevDigit - diff,
      currLength + 1
    );
  }

  if (diff > 0 && prevDigit + diff <= 9) {
    generateNums(
      nums,
      length,
      diff,
      currNum * 10 + prevDigit + diff,
      currLength + 1
    );
  }
};

const numsSameConsecDiff = (length, diff) => {
  const nums = [];

  if (length === 1) {
    nums.push(0);
  }

  for (let i = 1; i <= 9; i++) {
    generateNums(nums, length, diff, i, 1);
  }

  return nums;
};

console.log(numsSameConsecDiff(3, 7));
