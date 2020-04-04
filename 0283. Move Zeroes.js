const moveZeroes = (nums) => {
  let slow = (fast = 0);

  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      if (slow !== fast) {
        const temp = nums[slow];
        nums[slow] = nums[fast];
        nums[fast] = temp;
      }
      slow++;
    }
    fast++;
  }
};

console.log(moveZeroes([0, 1, 3, 0, 12]));
