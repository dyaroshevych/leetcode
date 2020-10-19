const twoSum = (nums, target) => {
  const numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (numsObj[target - nums[i]]) {
      const numIdx = nums.findIndex(item => item === target - nums[i]);
      return [Math.min(i, numIdx), Math.max(i, numIdx)];
    } else if (numsObj[nums[i]]) {
      numsObj[nums[i]]++;
    } else {
      numsObj[nums[i]] = 1;
    }
  }

  return answers;
};

console.log(twoSum([3, 3], 6));
