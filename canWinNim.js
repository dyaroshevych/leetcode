// INPUT: 4
// OUTPUT: false

// DP solution
const canWinNimDP = num => {
  let arr = [true, true, true];

  for (let i = 3; i < num; i++) {
    arr.push(!arr[i - 1] || !arr[i - 2] || !arr[i - 3]);
  }

  return arr[num - 1];
};

// O(1) solution
const canWinNim = num => !!(num % 4);

console.log(canWinNim(5));
