class MaxHeap {
  constructor() {
    this.values = [Infinity];
    this.size = 0;
  }

  insert(val) {
    this.values.push(val);
    this.size++;

    let currIdx = this.size;
    while (this.values[currIdx] > this.values[Math.floor(currIdx / 2)]) {
      const currParentIdx = Math.floor(currIdx / 2);
      [this.values[currIdx], this.values[currParentIdx]] = [
        this.values[currParentIdx],
        this.values[currIdx],
      ];
      currIdx = currParentIdx;
    }
  }

  popMax() {
    const maxValue = this.values[1];
    this.values[1] = this.values[this.size];
    this.values.pop();
    this.size--;
    if (this.size <= 1) return maxValue;

    let currIdx = 1;
    while (true) {
      let maxChildIdx =
        (currIdx * 2 <= this.size ? this.values[currIdx * 2] : -Infinity) >
        (currIdx * 2 + 1 <= this.size
          ? this.values[currIdx * 2 + 1]
          : -Infinity)
          ? currIdx * 2
          : currIdx * 2 + 1;

      if (
        this.values[currIdx] >= this.values[maxChildIdx] ||
        maxChildIdx > this.size
      ) {
        break;
      }

      [this.values[currIdx], this.values[maxChildIdx]] = [
        this.values[maxChildIdx],
        this.values[currIdx],
      ];

      currIdx = maxChildIdx;
    }

    return maxValue;
  }

  getMax() {
    if (this.size === 0) return null;
    return this.values[1];
  }
}

const lastStoneWeight = (stones) => {
  const stonesHeap = new MaxHeap();
  for (let i = 0; i < stones.length; i++) {
    stonesHeap.insert(stones[i]);
  }

  while (stonesHeap.size >= 2) {
    let [max1, max2] = [stonesHeap.popMax(), stonesHeap.popMax()];

    if (max1 !== max2) {
      max1 -= max2;
      stonesHeap.insert(max1);
    }
  }

  if (stonesHeap.size === 0) return 0;
  return stonesHeap.getMax();
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([1, 3]));
console.log(lastStoneWeight([10, 4, 2, 10]));
