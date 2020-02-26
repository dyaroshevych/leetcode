const checkSubarraySum = (nums, k) => {
  const arrayRemainders = [];
  const arrayRemainderSums = [];
  let currentRemainderSum = 0;

  for (let i = 0; i < nums.length; i++) {
    arrayRemainders.push(nums[i] % k);
    currentRemainderSum = (currentRemainderSum + nums[i]) % k;
    arrayRemainderSums.push(currentRemainderSum);
  }
  return [arrayRemainders, arrayRemainderSums];
};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));
