// i = nums[p1], j = nums[p2]
// i is even, j is even => p1++
// i is even, j is odd => swap(i, j), p1++, p2--
// i is odd, j is even => p1++, p2--
// i is odd, j is odd => p2--

const sortArrayByParity = (nums) => {
  let pointer1 = 0;
  let pointer2 = nums.length - 1;
  while (pointer1 < pointer2) {
    if (nums[pointer1] % 2 === 1 && nums[pointer2] % 2 === 0) {
      swap(nums, pointer1, pointer2);
    }

    if (nums[pointer1] % 2 === 0) {
      pointer1++;
    }

    if (nums[pointer2] % 2 === 1) {
      pointer2--;
    }
  }

  return nums;
};

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(sortArrayByParity([3, 1, 2, 4]));
