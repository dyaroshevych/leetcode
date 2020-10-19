// O(2^n) time | O(n) space
// const canPartition = (nums) => {
//   const helper = (target, sum, idx) => {
//     if (idx === nums.length) return false;
//     if (sum + nums[idx] === target) return true;

//     return (
//       helper(target, sum + nums[idx], idx + 1) || helper(target, sum, idx + 1)
//     );
//   };

//   let sum = nums.reduce((count, currVal) => count + currVal);
//   if (sum % 2) return false;

//   return helper(sum / 2, 0, 0);
// };

const canPartition = (nums) => {
  const sum = nums.reduce((counter, currNum) => counter + currNum, 0);

  if (sum % 2) return false;

  const target = sum / 2,
    dp = new Array(target + 1).fill(false);

  dp[0] = true;

  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = dp[j] || dp[j - nums[i]];
    }
  }

  return dp[target];
};

console.log(canPartition([1, 5, 11, 5]));
