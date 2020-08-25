// INPUT: [10, 2, 3, 5, 4, 7, 12, 14], K = 3
// OUTPUT: 9

// O(N) time | O(1) space
const numberOfSubarrays = (nums, K) => {
  const window1 = new Window();
  const window2 = new Window();

  let left1 = 0;
  let left2 = 0;

  let numNiceSubarrays = 0;

  for (let right = 0; right < nums.length; right++) {
    window1.add(nums[right]);
    window2.add(nums[right]);

    while (window1.numOdd > K) {
      window1.remove(nums[left1++]);
    }

    while (window2.numOdd >= K) {
      window2.remove(nums[left2++]);
    }

    numNiceSubarrays += left2 - left1;
  }

  return numNiceSubarrays;
};

class Window {
  constructor() {
    this.numOdd = 0;
  }

  add(value) {
    if (value % 2) {
      this.numOdd++;
    }
  }

  remove(value) {
    if (value % 2) {
      this.numOdd--;
    }
  }
}

console.log(numberOfSubarrays([10, 2, 3, 5, 4, 7, 12, 14], 3));
