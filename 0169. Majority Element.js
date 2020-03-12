const majorityElementHashMap = nums => {
  const frequency = {};

  for (let i = 0; i < nums.length; i++) {
    if (frequency[nums[i]]) {
      frequency[nums[i]]++;
    } else {
      frequency[nums[i]] = 1;
    }
  }

  for (let i of Object.keys(frequency)) {
    if (frequency[i] > nums.length / 2) {
      return i;
    }
  }
};

const majorityElement = nums => {
  let count = 0,
    candidate = null;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }
    candidate === nums[i] ? count++ : count--;
  }

  return candidate;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
