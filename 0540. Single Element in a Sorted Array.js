const singleNonDuplicate = (nums) => {
  let low = 0,
    high = nums.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (mid % 2) {
      if (nums[mid] !== nums[mid - 1]) {
        if (nums[mid] !== nums[mid + 1]) return nums[mid];
        high = mid;
      } else low = mid + 1;
    } else {
      if (nums[mid] !== nums[mid + 1]) {
        if (nums[mid] !== nums[mid - 1]) return nums[mid];
        high = mid;
      } else low = mid + 1;
    }
  }

  return nums[low];
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
