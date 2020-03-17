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

// [1,2,3,1]
// {
//     1: Set {0, 4}
//     2: Set {1}
//     3: Set {2}
// }
