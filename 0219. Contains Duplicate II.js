// INPUT: [ 99, 99 ], 2
// OUTPUT: true

const containsNearbyDuplicate = (nums, k) => {
  const numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (numsMap[nums[i]] !== null) {
      if (i - numsMap[nums[i]] <= k) return true;
    }
    numsMap[nums[i]] = i;
  }

  return false;
};

console.log(containsNearbyDuplicate([99, 99], 2));
