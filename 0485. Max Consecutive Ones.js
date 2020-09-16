const findMaxConsecutiveOnes = (nums) => {
  let maxLength = 0;
  let currLength = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currLength++;
    } else {
      maxLength = Math.max(maxLength, currLength);
      currLength = 0;
    }
  }

  return Math.max(maxLength, currLength);
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
