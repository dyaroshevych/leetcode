const searchRange = (nums, target) => {
  let low = 0,
    high = nums.length - 1,
    firstIdx = -1,
    lastIdx = -1;

  const searchFirst = (low, high) => {
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (nums[mid] === target) {
        firstIdx = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  };

  const searchLast = (low, high) => {
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (nums[mid] === target) {
        lastIdx = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  };

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      firstIdx = mid;
      lastIdx = mid;
      searchFirst(low, mid - 1);
      searchLast(mid + 1, high);
      break;
    }
    if (nums[mid] > target) {
      high = mid - 1;
    }
    if (nums[mid] < target) {
      low = mid + 1;
    }
  }

  return [firstIdx, lastIdx];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
