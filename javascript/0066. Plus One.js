// INPUT: [1, 2, 3]
// OUTPUT: [1, 2, 4]

const plusOne = arr => {
  let currentDigitIdx = arr.length - 1;

  while (currentDigitIdx && arr[currentDigitIdx] >= 9) {
    arr[currentDigitIdx] = 0;
    currentDigitIdx--;
  }

  arr[currentDigitIdx]++;

  if (arr[currentDigitIdx] === 10) {
    arr[currentDigitIdx] = 0;
    arr.unshift(1);
  }

  return arr;
};

console.log(plusOne([1, 2, 3]));
