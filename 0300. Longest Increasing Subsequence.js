// INPUT: [10, 9, 2, 5, 3, 7, 101, 18]
// OUTPUT: 4

const lengthOfLIS = (arr) => {
  if (arr.length === 0) return 0;

  const dp = [1];
  let max = 1;

  for (let i = 1; i < arr.length; i++) {
    let currMax = 1;

    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) currMax = Math.max(currMax, dp[j] + 1);
    }

    dp.push(currMax);

    max = Math.max(max, currMax);
  }

  return max;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
