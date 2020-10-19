class QueueNode {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(node) {
    const newNode = new QueueNode(node);

    if (this.head === null) this.head = newNode;
    else this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
  }

  dequeue() {
    if (this.head === null) return null;

    const node = this.head.node;
    if (this.head === this.tail) this.tail = this.tail.next;
    this.head = this.head.next;

    this.length--;

    return node;
  }
}

const averageOfLevels = (root) => {
  if (root === null) return [];

  const nodes = new Queue();
  nodes.enqueue(root);

  const levels = [];

  while (nodes.length) {
    const nodesLength = nodes.length;

    let levelSum = 0;

    for (let i = 0; i < nodesLength; i++) {
      const currNode = nodes.dequeue();

      levelSum += currNode.val;

      if (currNode.left) nodes.enqueue(currNode.left);
      if (currNode.right) nodes.enqueue(currNode.right);
    }

    levels.push(levelSum / nodesLength);
  }

  return levels;
};

console.log(
  averageOfLevels({
    val: 3,
    left: {
      val: 9,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
    right: { val: 20, left: null, right: null },
  })
);
