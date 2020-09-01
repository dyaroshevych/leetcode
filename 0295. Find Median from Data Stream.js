class MedianFinder {
  constructor() {
    this.minHalf = new Heap((a, b) => a > b);
    this.maxHalf = new Heap((a, b) => a < b);
  }

  addNum(num) {
    if (num < this.minHalf.peek()) {
      this.minHalf.push(num);
    } else {
      this.maxHalf.push(num);
    }

    if (this.minHalf.size === this.maxHalf.size + 2) {
      this.maxHalf.push(this.minHalf.pop());
    } else if (this.maxHalf.size === this.minHalf.size + 2) {
      this.minHalf.push(this.maxHalf.pop());
    }
  }

  findMedian() {
    if (this.minHalf.size === this.maxHalf.size) {
      return (this.minHalf.peek() + this.maxHalf.peek()) / 2;
    }

    if (this.minHalf.size > this.maxHalf.size) {
      return this.minHalf.peek();
    }

    return this.maxHalf.peek();
  }
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

class Heap {
  constructor(compare) {
    this.compare = compare;
    this.data = [];
    this.size = 0;
  }

  _traverseUp() {
    let idx = this.size - 1;

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);

      if (this.compare(this.data[parentIdx], this.data[idx])) {
        break;
      }

      swap(this.data, idx, parentIdx);
      idx = parentIdx;
    }
  }

  _traverseDown() {
    let idx = 0;

    while (idx * 2 + 1 < this.size) {
      const leftChildIdx = idx * 2 + 1;
      const rightChildIdx = idx * 2 + 2;

      let preferableChildIdx = leftChildIdx;

      if (
        rightChildIdx < this.size &&
        this.compare(this.data[rightChildIdx], this.data[leftChildIdx])
      ) {
        preferableChildIdx = rightChildIdx;
      }

      if (this.compare(this.data[idx], this.data[preferableChildIdx])) {
        break;
      }

      swap(this.data, idx, preferableChildIdx);
      idx = preferableChildIdx;
    }
  }

  push(val) {
    this.data.push(val);
    this.size++;
    this._traverseUp();
  }

  pop() {
    if (this.size === 0) {
      return null;
    }

    const val = this.data[0];

    this.data[0] = this.data[this.size - 1];
    this.data.pop();
    this.size--;
    this._traverseDown();

    return val;
  }

  peek() {
    if (this.size === 0) {
      return null;
    }

    return this.data[0];
  }
}
