// INPUT: [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 ]
// OUTPUT: 5
// ARRAY: [ 0, 1, 2, 3, 4, 2, 2, 3, 3, 4 ]

const removeDuplicates = (nums) => {
  let currUpdatedIndex = 1;
  let currIndex = 1;

  while (currIndex < nums.length) {
    if (nums[currIndex] !== nums[currIndex - 1]) {
      nums[currUpdatedIndex++] = nums[currIndex];
    }

    currIndex++;
  }

  return currUpdatedIndex;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
