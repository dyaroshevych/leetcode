// INPUT: [ 10, 5, 2, 6 ], 100
// OUTPUT: 8

const numSubarrayProductLessThanK = (nums, k) => {
  if (k <= 1) return 0;
  let left = (right = result = 0),
    product = 1;

  while (right < nums.length) {
    product *= nums[right];

    while (product >= k) product /= nums[left++];

    result += ++right - left;
  }

  return result;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
