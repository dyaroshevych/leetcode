const findDuplicatesSet = nums => {
  const frequency = new Set(),
    duplicates = [];

  for (let i = 0; i < nums.length; i++) {
    if (frequency.has(nums[i])) {
      duplicates.push(nums[i]);
    } else {
      frequency.add(nums[i]);
    }
  }

  return duplicates;
};

const findDuplicates = nums => {
  const duplicates = [];

  for (let i = 0; i < nums.length; i++) {
    let pos = Math.abs(nums[i]) - 1;

    if (nums[pos] < 0) {
      duplicates.push(pos + 1);
    } else {
      nums[pos] = -nums[pos];
    }
  }

  return duplicates;
};

console.log(findDuplicates([5, 4, 6, 7, 9, 3, 10, 9, 5, 6]));

//rgba(0, 59, 130, 0.91)
//rgba(2, 44, 95, 0.91)
