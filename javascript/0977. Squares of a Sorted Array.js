const sortedSquares = (nums) => {
  const squares = new Array(nums.length);

  let nonNegativeIndex = getFirstNonNegativeIndex(nums);
  let negativeIndex = nonNegativeIndex - 1;
  let currIndex = 0;

  while (negativeIndex >= 0 && nonNegativeIndex < nums.length) {
    if (Math.abs(nums[negativeIndex]) > Math.abs(nums[nonNegativeIndex])) {
      squares[currIndex++] = nums[nonNegativeIndex] ** 2;
      nonNegativeIndex++;
    } else {
      squares[currIndex++] = nums[negativeIndex] ** 2;
      negativeIndex--;
    }
  }

  while (negativeIndex >= 0) {
    squares[currIndex++] = nums[negativeIndex] ** 2;
    negativeIndex--;
  }

  while (nonNegativeIndex < nums.length) {
    squares[currIndex++] = nums[nonNegativeIndex] ** 2;
    nonNegativeIndex++;
  }

  return squares;
};

const getFirstNonNegativeIndex = (nums) => {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < 0) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
