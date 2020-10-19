// O(N^2) time | O(K) space
const kWeakestRows = (matrix, K) => {
  const heap = new MaxHeap(K);

  for (let i = 0; i < matrix.length; i++) {
    let sum = 0;

    for (let j = 0; j < matrix[0].length; j++) {
      sum += matrix[i][j];
    }

    heap.insert(sum, i);
  }

  return heap.sort();
};

class HeapNode {
  constructor(val, index) {
    this.val = val;
    this.index = index;
  }
}

// parent: Math.floor((idx - 1) / 2)
// left child: idx * 2 + 1
// right child: idx * 2 + 2
class MaxHeap {
  constructor(maxSize) {
    this.data = [];
    this.capacity = maxSize;
    this.length = 0;
  }

  swap(idx1, idx2) {
    [this.data[idx1], this.data[idx2]] = [this.data[idx2], this.data[idx1]];
  }

  // if value is greater, node is higher
  // if values are equal and index is greater, node is higher
  isFirstHigher(idx1, idx2) {
    return (
      this.data[idx1].val > this.data[idx2].val ||
      (this.data[idx1].val === this.data[idx2].val &&
        this.data[idx1].index > this.data[idx2].index)
    );
  }

  traverseUp() {
    let idx = this.length - 1;

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);

      if (this.isFirstHigher(parentIdx, idx)) {
        return;
      }

      this.swap(idx, parentIdx);
      idx = parentIdx;
    }
  }

  traverseDown() {
    let idx = 0;

    while (idx * 2 + 1 < this.length) {
      const leftChildIdx = idx * 2 + 1;
      const rightChildIdx = idx * 2 + 2;

      let maxChildIdx = leftChildIdx;

      if (
        rightChildIdx < this.length &&
        this.isFirstHigher(rightChildIdx, leftChildIdx)
      ) {
        maxChildIdx = rightChildIdx;
      }

      if (this.isFirstHigher(idx, maxChildIdx)) {
        return;
      }

      this.swap(idx, maxChildIdx);
      idx = maxChildIdx;
    }
  }

  insert(val, index) {
    const newNode = new HeapNode(val, index);

    this.data.push(newNode);

    if (this.length === this.capacity) {
      if (this.isFirstHigher(this.data.length - 1, 0)) {
        this.data.pop();
        return;
      }

      this.data.pop();
      this.data[0] = newNode;
      this.traverseDown();
    } else {
      this.length++;
      this.traverseUp();
    }
  }

  peek() {
    return this.data[this.length - 1];
  }

  sort() {
    for (let i = 0; i < this.data.length; i++) {
      const index = this.data[0].index;

      this.swap(0, this.length - 1);
      this.data[--this.length] = index;
      this.traverseDown();
    }

    return this.data;
  }
}

console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3
  )
);
