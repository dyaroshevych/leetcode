// INPUT: [ 3, 3, 3, 3, 5, 5, 5, 2, 2, 7 ]
// OUTPUT: 2

const minSetSize = (nums) => {
  const frequency = {};

  const N = nums.length / 2;

  // nums length is 2*N
  for (let i = 0; i < 2 * N; i++) {
    if (frequency[nums[i]]) {
      frequency[nums[i]]++;
    } else {
      frequency[nums[i]] = 1;
    }
  }

  const freqArr = new Array(2 * N).fill(0);

  Object.values(frequency).forEach((i) => freqArr[i - 1]++);

  let count = 0;
  let index = freqArr.length - 1;
  let sum = 0;

  while (sum < N) {
    if (freqArr[index]) {
      sum += index + 1;
      count++;
      freqArr[index]--;
    } else {
      index--;
    }
  }

  return count;
};

console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]));
