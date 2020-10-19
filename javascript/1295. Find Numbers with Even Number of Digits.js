const findNumbers = (nums) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (getDigitsCount(nums[i]) % 2 === 0) {
      count++;
    }
  }

  return count;
};

const getDigitsCount = (num) => {
  let digitsCount = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    digitsCount++;
  }

  return digitsCount;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
