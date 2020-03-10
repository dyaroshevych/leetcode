const mySqrt = num => {
  let left = 0,
    right = num;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (mid * mid === num) {
      return mid;
    } else if (mid * mid < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left - 1;
};

console.log(mySqrt(0));
