// INPUT: 10
// OUTPUT: 12

const nthUglyNumber = (n) => {
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

console.log(nthUglyNumber(10));
