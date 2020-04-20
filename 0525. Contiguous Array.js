// INPUT: [ 0, 1, 0, 1 ]
// OUTPUT: 4

const findMaxLength = (nums) => {
  const numsCount = { 0: -1 };
  let count = (maxLength = 0);
  for (let i = 0; i < nums.length; i++) {
    count += nums[i] === 0 ? -1 : 1;
    if (numsCount[count] >= -1) {
      maxLength = Math.max(maxLength, i - numsCount[count]);
    } else {
      numsCount[count] = i;
    }
  }

  return maxLength;
};

console.log(findMaxLength([0, 1, 0, 1]));
