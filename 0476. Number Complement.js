const findComplement = (num) => {
  let currPower = 1,
    complementNum = 0;

  while (num > 0) {
    const currDigit = num % 2;
    num = Math.floor(num / 2);

    complementNum += currPower * (1 - currDigit);
    currPower *= 2;
  }

  return complementNum;
};

console.log(findComplement(5));
