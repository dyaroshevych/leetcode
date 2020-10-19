// INPUT: [ 3, 4, -1, 1 ]
// OUTPUT: 2

const firstMissingPositive = nums => {
  let i = 0;

  while (i < nums.length) {
    if (
      nums[i] > 0 &&
      nums[i] <= nums.length &&
      nums[i] !== nums[nums[i] - 1]
    ) {
      const temp = nums[i];
      nums[i] = nums[nums[i] - 1];
      nums[temp - 1] = temp;
    } else {
      i++;
    }
  }

  i = 0;
  while (nums[i] === ++i);

  return i;
};

console.log(firstMissingPositive([3, 4, -1, 1]));
