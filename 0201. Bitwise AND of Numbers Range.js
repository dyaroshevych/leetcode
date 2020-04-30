const rangeBitwiseAnd = (m, n) => {
  let shiftsCount = 0;

  while (m < n) {
    m >>= 1;
    n >>= 1;
    shiftsCount++;
  }

  return m << shiftsCount;
};

console.log(rangeBitwiseAnd(4, 5));
// 100
// 101

// 5 7
// 3
