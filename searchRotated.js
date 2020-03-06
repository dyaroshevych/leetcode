const search = (nums, target) => {
  let low = 0,
    high = nums.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] > nums[high]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  if (target <= nums[nums.length - 1]) {
    high = nums.length - 1;
  } else {
    low = 0;
  }

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return nums[low] === target ? low : -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 7));
