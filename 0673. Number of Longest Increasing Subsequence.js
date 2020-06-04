const findNumberOfLIS = (nums) => {
  const lengths = new Array(nums.length).fill(1),
    counts = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        if (lengths[j] + 1 > lengths[i]) {
          lengths[i] = lengths[j] + 1;
          counts[i] = counts[j];
        } else if (lengths[j] + 1 === lengths[i]) counts[i] += counts[j];
      }
    }
  }

  const maxLength = Math.max(...lengths);
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++)
    if (lengths[i] === maxLength) maxCount += counts[i];

  return maxCount;
};

console.log(findNumberOfLIS([1, 3, 5, 4, 7]));
