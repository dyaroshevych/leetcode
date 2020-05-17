class MaxHeap {
  constructor() {
    this.data = [Infinity];
  }

  insert(val) {
    this.data.push(val);

    let currIdx = this.data.length - 1;
    while (this.data[currIdx] > this.data[Math.floor(currIdx / 2)]) {
      [this.data[Math.floor(currIdx / 2)], this.data[currIdx]] = [
        this.data[currIdx],
        this.data[Math.floor(currIdx / 2)],
      ];

      currIdx = Math.floor(currIdx / 2);
    }
  }

  popMax() {
    const val = this.data[1];
    this.data[1] = this.data[this.data.length - 1];
    this.data.pop();

    let currIdx = 1;
    while (currIdx * 2 < this.data.length) {
      const maxChildIdx =
        currIdx * 2 + 1 < this.data.length &&
        this.data[currIdx * 2] < this.data[currIdx * 2 + 1]
          ? currIdx * 2 + 1
          : currIdx * 2;

      if (this.data[currIdx] < this.data[maxChildIdx]) {
        [this.data[currIdx], this.data[maxChildIdx]] = [
          this.data[maxChildIdx],
          this.data[currIdx],
        ];

        currIdx = maxChildIdx;
      } else break;
    }

    return val;
  }
}

const findKthLargest = (nums, k) => {
  const heap = new MaxHeap();

  for (let i = 0; i < nums.length; i++) {
    heap.insert(nums[i]);
  }

  for (let i = 1; i < k; i++) heap.popMax();

  return heap.popMax();
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
