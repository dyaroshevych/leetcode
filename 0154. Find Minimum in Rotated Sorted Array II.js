const findMin = (nums) => {
  if (nums[0] < nums[nums.length - 1]) {
    return nums[0];
  }

  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else if (nums[mid] < nums[end]) {
      if (nums[mid - 1] > nums[mid]) {
        return nums[mid];
      }

      end = mid - 1;
    } else {
      end--;
    }
  }

  return nums[start];
};

console.log(findMin([1, 2, 3, 3, 3, -1, 0, 0]));
console.log(findMin([3, 1, 3, 3]));
