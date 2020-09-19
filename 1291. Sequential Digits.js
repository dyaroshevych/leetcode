const sequentialDigits = (low, high) => {
  const nums = [];

  for (let digit = 1; digit <= 9; digit++) {
    let currNum = digit;

    while (currNum <= high) {
      if (currNum >= low) {
        nums.push(currNum);
      }

      if (currNum % 10 === 9) {
        break;
      }

      currNum = currNum * 10 + (currNum % 10) + 1;
    }
  }

  return nums.sort((a, b) => a - b);
};

console.log(sequentialDigits(1000, 13000));
