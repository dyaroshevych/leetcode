const largestNumber = (nums) =>
  removeLeadingZeros(
    nums
      .map((num) => String(num))
      .sort(isLarger)
      .join("")
  );

const isLarger = (digits1, digits2) => {
  for (let i = 0; i < Math.max(digits1.length, digits2.length) * 2; i++) {
    const currDigit1 = digits1[i % digits1.length];
    const currDigit2 = digits2[i % digits2.length];

    if (currDigit1 !== currDigit2) {
      return currDigit2 - currDigit1;
    }
  }

  return 0;
};

const removeLeadingZeros = (str) => {
  let startIndex = 0;

  while (str[startIndex] === "0") {
    startIndex++;
  }

  return str.slice(startIndex) || "0";
};

console.log(largestNumber([68, 9, 39, 99, 989]));
