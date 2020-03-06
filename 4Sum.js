// INPUT: [ 1, 0, -1, 0, -2, 2 ], 0
// OUTPUT: [ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ]

const fourSum = (nums, target) => {
  nums.sort((a, b) => a - b);

  const ans = [];

  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] !== nums[i - 1]) {
      for (let j = i + 1; j < nums.length - 2; j++) {
        if (j === i + 1 || nums[j] !== nums[j - 1]) {
          const currentTarget = target - nums[i] - nums[j];

          let low = j + 1,
            high = nums.length - 1;

          while (low < high) {
            if (nums[low] + nums[high] === currentTarget) {
              ans.push([nums[i], nums[j], nums[low], nums[high]]);
              do {
                low++;
              } while (nums[low - 1] === nums[low]);
              do {
                high--;
              } while (nums[high] === nums[high + 1]);
            } else if (nums[low] + nums[high] > currentTarget) {
              high--;
            } else {
              low++;
            }
          }
        }
      }
    }
  }

  return ans;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
