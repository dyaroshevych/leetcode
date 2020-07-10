class QueueNode {
  constructor(val, pos, next = null) {
    this.val = val;
    this.pos = pos;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(node, pos) {
    const newNode = new QueueNode(node, pos);

    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }

    this.tail = newNode;
    this.length++;
  }

  dequeue() {
    if (this.length === 0) return null;
    if (this.length === 1) this.tail = null;

    const node = this.head.val,
      pos = this.head.pos;
    this.head = this.head.next;
    this.length--;

    return { node, pos };
  }
}

const widthOfBinaryTree = (root) => {
  if (root === null) return 0;

  const nodes = new Queue();
  nodes.enqueue(root, 0);

  let maxWidth = 0;

  while (nodes.length) {
    let length = nodes.length,
      min = Infinity,
      max = 0;

    for (let i = 0; i < length; i++) {
      const { node, pos } = nodes.dequeue();

      min = Math.min(min, pos);
      max = Math.max(max, pos);

      if (node) {
        if (node.left) nodes.enqueue(node.left, pos * 2 + 1);
        if (node.right) nodes.enqueue(node.right, pos * 2 + 2);
      }
    }

    maxWidth =
      length === 1 ? Math.max(maxWidth, 1) : Math.max(maxWidth, max - min + 1);
  }

  return maxWidth;
};

console.log(
  widthOfBinaryTree({
    val: 1,
    left: {
      val: 3,
      left: { val: 5, left: null, right: null },
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: null,
    },
  })
);
