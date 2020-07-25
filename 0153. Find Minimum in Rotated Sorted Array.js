const findMin = (nums) => {
  if (nums[0] < nums[nums.length - 1]) {
    return nums[0];
  }

  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = Math.ceil((start + end) / 2);

    if (nums[mid] > nums[start]) {
      start = mid;
    } else {
      if (nums[mid - 1] > nums[mid]) {
        return nums[mid];
      }

      end = mid - 1;
    }
  }

  return nums[start];
};

console.log(findMin([4, 5, 6, 7, 1, 2, 3]));
