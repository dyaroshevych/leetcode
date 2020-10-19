// INPUT: [ 3, 2, 4, 1 ]
// OUTPUT: [ 3, 4, 2, 3, 2 ]
const pancakeSort = (nums) => {
  const flips = [];

  let end = nums.length - 1;

  for (let step = 0; step < nums.length - 1; step++) {
    let indexOfCurrMax = 0;

    for (let i = 1; i <= end; i++) {
      if (nums[i] > nums[indexOfCurrMax]) {
        indexOfCurrMax = i;
      }
    }

    if (indexOfCurrMax !== 0 && indexOfCurrMax !== end) {
      flip(nums, indexOfCurrMax + 1);
      flips.push(indexOfCurrMax + 1);
    }

    if (indexOfCurrMax !== end) {
      flip(nums, end + 1);
      flips.push(end + 1);
    }

    end--;
  }

  return flips;
};

const flip = (arr, K) => {
  for (let i = Math.floor(K / 2) - 1; i >= 0; i--) {
    swap(arr, i, K - i - 1);
  }
};

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(pancakeSort([3, 2, 4, 1]));
