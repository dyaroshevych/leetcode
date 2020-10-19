// INPUT: [ -1, 2, 1, -4 ], 1
// OUTPUT: 2

const threeSumClosest = (nums, target) => {
  let closestTarget = Infinity;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      const currentTarget = target - nums[i];

      let low = i + 1,
        high = nums.length - 1;

      while (low < high) {
        if (nums[low] + nums[high] === currentTarget) {
          return target;
        }
        const currentDifference = nums[low] + nums[high] - currentTarget;
        if (Math.abs(closestTarget - target) > Math.abs(currentDifference)) {
          closestTarget = target + currentDifference;
        }
        if (nums[low] + nums[high] > currentTarget) {
          high--;
        } else if (nums[low] + nums[high] < currentTarget) {
          low++;
        }
      }
    }
  }

  return closestTarget;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
