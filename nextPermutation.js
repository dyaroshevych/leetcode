const nextPermutation = nums => {
  if (!nums.length) {
    return nums;
  }

  let pointer = nums.length - 1;
  while (pointer > 0 && nums[pointer] <= nums[pointer - 1]) {
    pointer--;
  }
  pointer--;

  let newPointer;
  if (pointer === -1) {
    newPointer = nums.length - 1;
  } else {
    newPointer = nums.length - 1;
    while (newPointer > 0 && nums[newPointer] <= nums[pointer]) {
      newPointer--;
    }

    const temp = nums[pointer];
    nums[pointer] = nums[newPointer];
    nums[newPointer] = temp;
  }

  for (let i = pointer + 1; i <= Math.floor((nums.length + pointer) / 2); i++) {
    const temp = nums[i];
    nums[i] = nums[nums.length + pointer - i];
    nums[nums.length + pointer - i] = temp;
  }

  return nums;
};

console.log(nextPermutation([1, 1, 6, 5, 0]));
