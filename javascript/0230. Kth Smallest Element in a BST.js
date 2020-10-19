class MaxHeap {
  constructor(capacity) {
    this.data = [Infinity];
    this.capacity = capacity;
  }

  insert(val) {
    if (this.data.length === this.capacity + 1) {
      if (this.data[1] <= val) return;
      this.popMax();
    }

    this.data.push(val);

    let idx = this.data.length - 1;
    while (this.data[idx] > this.data[Math.floor(idx / 2)]) {
      [this.data[idx], this.data[Math.floor(idx / 2)]] = [
        this.data[Math.floor(idx / 2)],
        this.data[idx],
      ];
      idx = Math.floor(idx / 2);
    }
  }

  popMax() {
    const val = this.data[1];
    this.data[1] = this.data[this.data.length - 1];
    this.data.pop();

    let idx = 1;
    while (idx * 2 < this.data.length) {
      const maxChildIdx =
        idx * 2 + 1 < this.data.length &&
        this.data[idx * 2 + 1] > this.data[idx * 2]
          ? idx * 2 + 1
          : idx * 2;

      if (this.data[idx] < this.data[maxChildIdx]) {
        [this.data[idx], this.data[maxChildIdx]] = [
          this.data[maxChildIdx],
          this.data[idx],
        ];
        idx = maxChildIdx;
      } else break;
    }

    return val;
  }
}

const kthSmallestUsingHeap = (root, k) => {
  const heap = new MaxHeap(k);

  const traverse = (node) => {
    if (!node) return;

    heap.insert(node.val);
    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);

  return heap.popMax();
};

const kthSmallest = (root, k) => {
  const traverse = (node) => {
    if (!node) return;

    const val = traverse(node.left);
    if (val !== undefined) return val;

    if (--k === 0) return node.val;

    return traverse(node.right);
  };

  return traverse(root);
};

console.log(
  kthSmallest(
    {
      val: 3,
      left: {
        val: 1,
        left: null,
        right: { val: 2, left: null, right: null },
      },
      right: { val: 4, left: null, right: null },
    },
    2
  )
);
