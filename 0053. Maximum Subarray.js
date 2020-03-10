// INPUT: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// OUTPUT: 6

const maxSubArray = arr => {
  let maxSoFar = arr[0],
    maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2, -3, -1]));
