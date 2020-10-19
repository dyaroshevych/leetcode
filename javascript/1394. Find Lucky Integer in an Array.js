// INPUT: [ 2, 2, 3, 4 ]
// OUTPUT: 2

const findLucky = (nums) => {
  const frequency = {};

  for (let i = 0; i < nums.length; i++) {
    if (frequency[nums[i]]) {
      frequency[nums[i]]++;
    } else {
      frequency[nums[i]] = 1;
    }
  }

  let maxLuckyNum = -1;

  for (let i = 0; i < nums.length; i++) {
    if (frequency[nums[i]] === nums[i]) {
      maxLuckyNum = Math.max(maxLuckyNum, nums[i]);
    }
  }

  return maxLuckyNum;
};

console.log(findLucky([2, 2, 3, 4]));
