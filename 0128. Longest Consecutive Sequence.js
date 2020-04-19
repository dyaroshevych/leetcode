const longestConsecutive = (nums) => {
  const set = new Set(nums);
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      let currNum = nums[i] + 1;
      while (set.has(currNum)) currNum++;

      maxLength = Math.max(maxLength, currNum - nums[i]);
    }
  }

  return maxLength;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
