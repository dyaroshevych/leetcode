// INPUT: [ 2, 0, 2, 1, 1, 0 ]
// OUTPUT: [ 0, 0, 1, 1, 2, 2 ]

const sortColors = (nums) => {
  let idx = (start = 0),
    end = nums.length - 1;

  while (idx <= end) {
    if (nums[idx] === 0) {
      nums[idx] = 1;
      nums[start] = 0;
      start++;
      idx++;
    } else if (nums[idx] === 2) {
      nums[idx] = nums[end];
      nums[end] = 2;
      end--;
    } else idx++;
  }

  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
