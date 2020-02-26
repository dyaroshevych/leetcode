// INPUT: 5
// OUTPUT: 111221

const countAndSay = n => {
  const arr = ["1"];

  for (let count = 1; count < n; count++) {
    const currentNumber = arr[count - 1];
    let i = 0,
      currentStr = "";
    while (i < currentNumber.length) {
      const currentDigit = currentNumber[i];
      i++;
      let currentDigitCount = 1;
      while (currentNumber[i] === currentDigit) {
        i++;
        currentDigitCount++;
      }
      currentStr += `${currentDigitCount}${currentDigit}`;
    }
    arr.push(currentStr);
  }

  return arr[n - 1];
};

console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));
console.log(countAndSay(6));
console.log(countAndSay(7));
console.log(countAndSay(29));
