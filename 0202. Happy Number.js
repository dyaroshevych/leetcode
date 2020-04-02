const isHappy = num => {
  const getDigitSquareSum = n => {
    let count = 0;

    while (n > 0) {
      count += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    return count;
  };

  let slow = (fast = num);
  do {
    slow = getDigitSquareSum(slow);
    fast = getDigitSquareSum(getDigitSquareSum(fast));
  } while (slow !== fast);

  if (slow === 1) return true;
  return false;
};

console.log(isHappy(19));
