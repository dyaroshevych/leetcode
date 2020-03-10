// a[0] = 1
// a[1] = min(a[0]*2, a[0]*3, a[0]*5)
// a[2] = min(a[1] * 2, a[0] * 3, a[0] * 5)
// a[3] = min(a[1] * 2, a[1] * 3, a[0] * 5)
// a[4] = min(a[2] * 2, a[1] * 3, a[0] * 5)
// a[5] = min(a[2] * 2, a[1] * 3, a[1] * 5)

const nthUglyNumber = n => {
  const uglyNumbers = [1];

  let pointer2 = (pointer3 = pointer5 = 0);

  for (let i = 1; i < n; i++) {
    uglyNumbers.push(
      Math.min(
        uglyNumbers[pointer2] * 2,
        uglyNumbers[pointer3] * 3,
        uglyNumbers[pointer5] * 5
      )
    );

    if (uglyNumbers[i] === uglyNumbers[pointer2] * 2) {
      pointer2++;
    }
    if (uglyNumbers[i] === uglyNumbers[pointer3] * 3) {
      pointer3++;
    }
    if (uglyNumbers[i] === uglyNumbers[pointer5] * 5) {
      pointer5++;
    }
  }

  return uglyNumbers[n - 1];
};

console.log(nthUglyNumber(1));
