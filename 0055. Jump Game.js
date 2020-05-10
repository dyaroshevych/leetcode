// INPUT: [ 3, 2, 1, 0, 4 ]
// OUTPUT: false

const canJump = (nums) => {
  let maxJumpIdx = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxJumpIdx = Math.max(maxJumpIdx, i + nums[i]);
    if (maxJumpIdx <= i) return false;
  }

  return true;
};

console.log(canJump([3, 2, 1, 0, 4]));
