class MinHeap {
  constructor(maxSize) {
    this.heap = [];
    this.maxSize = maxSize;
  }

  traverseDown() {
    if (this.heap.length === 1) return;

    let idx = 0;

    do {
      const leftChildIdx = idx * 2 + 1;
      const rightChildIdx = idx * 2 + 2;

      let minChildIdx = leftChildIdx;
      if (
        rightChildIdx < this.heap.length &&
        this.heap[leftChildIdx] > this.heap[rightChildIdx]
      ) {
        minChildIdx = rightChildIdx;
      }

      if (this.heap[idx] > this.heap[minChildIdx]) {
        [this.heap[idx], this.heap[minChildIdx]] = [
          this.heap[minChildIdx],
          this.heap[idx],
        ];
        idx = minChildIdx;
      } else {
        break;
      }
    } while (idx * 2 + 1 < this.heap.length);
  }

  traverseUp() {
    if (this.heap.length === 1) return;

    let idx = this.heap.length - 1;

    do {
      const parentIdx = Math.floor((idx - 1) / 2);

      if (this.heap[parentIdx] > this.heap[idx]) {
        [this.heap[parentIdx], this.heap[idx]] = [
          this.heap[idx],
          this.heap[parentIdx],
        ];
        idx = parentIdx;
      } else {
        break;
      }
    } while (idx > 0);
  }

  insert(val) {
    if (this.heap.length === this.maxSize) {
      if (this.peek() < val) {
        this.heap[0] = val;
        this.traverseDown();
      }
      return;
    }

    this.heap.push(val);
    this.traverseUp();
  }

  peek() {
    if (this.heap.length === 0) return null;

    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

class KthLargest {
  constructor(k, nums) {
    this.heap = new MinHeap(k);
    for (let i = 0; i < nums.length; i++) {
      this.heap.insert(nums[i]);
    }
  }

  add(val) {
    if (this.heap.heap.length < this.heap.maxSize || val >= this.heap.peek()) {
      this.heap.insert(val);
    }

    return this.heap.peek();
  }
}

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);

console.log(kthLargest.add(3));
console.log(kthLargest.add(5));
console.log(kthLargest.add(10));
console.log(kthLargest.add(9));
console.log(kthLargest.add(4));
