// INPUT: [ 1, 2, 1, 2, 3 ], 2
// OUTPUT: 7

const subarraysWithKDistinct = (nums, K) => {
  const window1 = new Window();
  const window2 = new Window();

  let left1 = 0;
  let left2 = 0;

  let numValidSubarrays = 0;

  for (let right = 0; right < nums.length; right++) {
    window1.add(nums[right]);
    window2.add(nums[right]);

    while (window1.nonzero > K) {
      window1.remove(nums[left1++]);
    }

    while (window2.nonzero >= K) {
      window2.remove(nums[left2++]);
    }

    numValidSubarrays += left2 - left1;
  }

  return numValidSubarrays;
};

class Window {
  constructor() {
    this.counter = {};
    this.nonzero = 0;
  }

  add(val) {
    if (!this.counter[val]) {
      this.counter[val] = 1;
      this.nonzero++;
    } else {
      this.counter[val]++;
    }
  }

  remove(val) {
    this.counter[val]--;

    if (this.counter[val] === 0) {
      this.nonzero--;
    }
  }
}

console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2));
