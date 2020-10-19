// INPUT: [10, 9, 2, 5, 3, 7, 101, 18]
// OUTPUT: 4

const getIndex = (tailElements, right, element) => {
  let left = -1;

  while (left < right) {
    const mid = Math.ceil((left + right) / 2);

    if (tailElements[mid] >= element) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }

  return left;
};

const lengthOfLIS = (nums) => {
  if (nums.length === 0) {
    return 0;
  }

  const tailElements = new Array(nums.length);
  tailElements[0] = nums[0];

  let len = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < tailElements[0]) {
      tailElements[0] = nums[i];
    } else if (nums[i] > tailElements[len - 1]) {
      tailElements[len] = nums[i];
      len++;
    } else {
      const highestLengthWithElement =
        getIndex(tailElements, len - 1, nums[i]) + 1;

      tailElements[highestLengthWithElement] = Math.min(
        tailElements[highestLengthWithElement],
        nums[i]
      );
    }
  }

  return len;
};

// const lengthOfLIS = (arr) => {
//   if (arr.length === 0) return 0;

//   const dp = [1];
//   let max = 1;

//   for (let i = 1; i < arr.length; i++) {
//     let currMax = 1;

//     for (let j = 0; j < i; j++) {
//       if (arr[j] < arr[i]) currMax = Math.max(currMax, dp[j] + 1);
//     }

//     dp.push(currMax);

//     max = Math.max(max, currMax);
//   }

//   return max;
// };

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
