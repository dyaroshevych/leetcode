const containsDuplicate = nums => {
  const numsSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (numsSet.has(nums[i])) return true;
    numsSet.add(nums[i]);
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
