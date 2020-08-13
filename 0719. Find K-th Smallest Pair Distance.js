const hasAtLeastKDistancesSmallerThanNum = (nums, K, distance) => {
  let count = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    while (nums[right] - nums[left] > distance) {
      left++;
    }

    count += right - left;
  }

  return count >= K;
};

const smallestDistancePair = (nums, K) => {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums[nums.length - 1] - nums[0];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (hasAtLeastKDistancesSmallerThanNum(nums, K, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(smallestDistancePair([1, 3, 1], 1));
