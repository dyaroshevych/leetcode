// INPUT: [ 10, 5, 2, 6 ], 100
// OUTPUT: 8

const numSubarrayProductLessThanK = (nums, K) => {
  if (K <= 1) {
    return 0;
  }

  let start = 0;
  let count = 0;
  let currProduct = 1;

  for (let end = 0; end < nums.length; end++) {
    currProduct *= nums[end];

    while (currProduct >= K) {
      currProduct /= nums[start++];
    }

    count += end - start + 1;
  }

  return count;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
