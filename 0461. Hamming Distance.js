// INPUT: 1, 4
// OUTPUT: 2

const binaryFromNum = num => {
  let binaryStr = "";
  while (num > 0) {
    binaryStr = (num % 2) + binaryStr;
    num = Math.floor(num / 2);
  }
  return binaryStr;
};

const hammingDistance = (num1, num2) => {
  const binary1 = binaryFromNum(num1),
    binary2 = binaryFromNum(num2);

  let maxLength = Math.max(binary1.length, binary2.length),
    differentCount = 0;

  for (let i = 0; i < maxLength; i++)
    if (
      !!Number(binary1[binary1.length - i - 1]) !==
      !!Number(binary2[binary2.length - i - 1])
    )
      differentCount++;

  return differentCount;
};

console.log(hammingDistance(1, 4));
