const findDisappearedNumbers = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i + 1) {
      if (nums[i] === nums[nums[i] - 1]) {
        break;
      }

      swap(nums, i, nums[i] - 1);
    }
  }

  const missingNums = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      missingNums.push(i + 1);
    }
  }

  return missingNums;
};

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
