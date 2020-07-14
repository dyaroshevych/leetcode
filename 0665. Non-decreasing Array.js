const checkPossibility = (nums) => {
  let idx = null;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (idx !== null) return false;
      idx = i;
    }
  }

  return (
    idx === null ||
    idx === 0 ||
    idx === nums.length - 2 ||
    nums[idx - 1] <= nums[idx + 1] ||
    nums[idx] <= nums[idx + 2]
  );
};

console.log(checkPossibility([2, 3, 3, 2, 4]));
