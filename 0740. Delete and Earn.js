const getCount = (nums, index) => {
  let count = 1;
  while (nums[index + count - 1] === nums[index + count]) {
    count++;
  }

  return count;
};

const deleteAndEarn = (nums) => {
  if (nums.length === 0) {
    return 0;
  }

  nums.sort((a, b) => a - b);

  let countMin = getCount(nums, 0);

  let withPrev = nums[0] * countMin;
  let withoutPrev = 0;

  for (let i = countMin; i < nums.length; i++) {
    const currCount = getCount(nums, i);
    let currSum = nums[i] * currCount;

    if (nums[i] === nums[i - 1] + 1) {
      [withPrev, withoutPrev] = [
        withoutPrev + currSum,
        Math.max(withPrev, withoutPrev),
      ];
    } else {
      [withPrev, withoutPrev] = [
        Math.max(withPrev, withoutPrev) + currSum,
        Math.max(withPrev, withoutPrev),
      ];
    }

    i += currCount - 1;
  }

  return Math.max(withPrev, withoutPrev);
};

console.log(deleteAndEarn([3, 4, 2]));
