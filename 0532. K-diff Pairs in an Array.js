// INPUT: [3, 1, 4, 1, 5], K = 2
// OUTPUT: 2

const findPairs = (nums, K) => {
  nums.sort((a, b) => a - b);

  let pointer1 = 0;
  let pointer2 = 1;

  let counter = 0;

  while (pointer1 < nums.length && pointer2 < nums.length) {
    const currDiff = nums[pointer2] - nums[pointer1];

    if (currDiff === K) {
      counter++;

      do {
        pointer1++;
      } while (pointer1 < nums.length && nums[pointer1] === nums[pointer1 - 1]);

      do {
        pointer2++;
      } while (pointer2 < nums.length && nums[pointer2] === nums[pointer2 - 1]);
    } else if (currDiff > K) {
      pointer1++;
    } else {
      pointer2++;
    }

    pointer2 = Math.max(pointer2, pointer1 + 1);
  }

  return counter;
};

console.log(findPairs([3, 1, 4, 1, 5], 2)); // 2
