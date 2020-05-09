const isPerfectSquareInefficient = (num) => {
  let i = 1,
    sum = 0;

  while (sum < num) {
    sum += i;
    i += 2;
  }

  return sum === num;
};

const isPerfectSquare = (num) => {
  let low = 1,
    high = num;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (mid * mid > num) high = mid - 1;
    else if (mid * mid < num) low = mid + 1;
    else return true;
  }

  return false;
};

console.log(isPerfectSquare(16));
