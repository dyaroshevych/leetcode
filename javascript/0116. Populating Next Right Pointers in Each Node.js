class QueueNode {
  constructor(node, next = null) {
    this.node = node;
    this.next = next;
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
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }

    this.length++;
  }

  dequeue() {
    if (this.length === 0) return null;

    const node = this.head.node;
    this.head = this.head.next;
    this.length--;

    return node;
  }
}

const connectLinearSpace = (root) => {
  if (root === null) return null;

  const nodes = new Queue();
  nodes.enqueue(root);

  while (nodes.length > 0) {
    const currLevelNodesNumber = nodes.length;
    let prevNode = null;

    for (let i = 0; i < currLevelNodesNumber; i++) {
      const currNode = nodes.dequeue();
      currNode.next = prevNode;
      prevNode = currNode;

      if (currNode.right) nodes.enqueue(currNode.right);
      if (currNode.left) nodes.enqueue(currNode.left);
    }
  }

  return root;
};

const connect = (root) => {
  let currNode = root;
  while (currNode && currNode.left) {
    const nextLevel = currNode.left;

    while (currNode) {
      currNode.left.next = currNode.right;
      currNode.right.next = currNode.next && currNode.next.left;
      currNode = currNode.next;
    }

    currNode = nextLevel;
  }

  return root;
};

console.log(
  connect({
    val: 1,
    left: {
      val: 2,
      left: { val: 4, left: null, right: null, next: null },
      right: { val: 5, left: null, right: null, next: null },
      next: null,
    },
    right: {
      val: 3,
      left: { val: 6, left: null, right: null, next: null },
      right: { val: 7, left: null, right: null, next: null },
      next: null,
    },
    next: null,
  })
);
