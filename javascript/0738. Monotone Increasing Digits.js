const monotoneIncreasingDigits = (num) => {
  let arr = String(num)
    .split("")
    .map((digit) => Number(digit));

  let currIdx = 0;
  while (currIdx < arr.length - 1 && arr[currIdx] <= arr[currIdx + 1])
    currIdx++;
  arr[currIdx]--;
  while (currIdx > 0 && arr[currIdx - 1] > arr[currIdx]) arr[--currIdx]--;

  let result = 0;
  for (let i = 0; i < arr.length; i++)
    result += Math.pow(10, i) * arr[arr.length - i - 1];

  return result;
};

console.log(monotoneIncreasingDigits(1486795));
