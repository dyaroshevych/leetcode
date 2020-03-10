const twoSum = (nums, target) => {
  let low = 0,
    high = nums.length - 1;

  while (low < high) {
    if (nums[low] + nums[high] === target) {
      return [low + 1, high + 1];
    }
    if (nums[low] + nums[high] > target) {
      high--;
    } else {
      low++;
    }
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
