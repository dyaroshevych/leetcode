// INPUT: -321
// OUTPUT: -123

const reverse = (number) => {
  let isNegative = false;
  if (number < 0) {
    isNegative = true;
    number = -number;
  }

  let ans = 0;
  while (number > 0) {
    const currentDigit = number % 10;
    number = Math.floor(number / 10);
    ans = ans * 10 + currentDigit;
  }

  return isNegative ? -ans : ans;
};

console.log(reverse(-321));
