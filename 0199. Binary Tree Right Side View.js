class QueueNode {
  constructor(node, level, next = null) {
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
    if (this.length === 1) {
      this.tail = null;
    }

    const nodeData = this.head;
    this.head = this.head.next;

    this.length--;

    return nodeData;
  }
}

const rightSideView = (root) => {
  if (root === null) return [];

  const visibleValues = [];
  const nodes = new Queue();
  nodes.enqueue(root, 1);

  while (nodes.length > 0) {
    const currLevelNodesNumber = nodes.length;

    for (let i = 0; i < currLevelNodesNumber; i++) {
      currNodeData = nodes.dequeue();

      if (currNodeData.node.left) nodes.enqueue(currNodeData.node.left);
      if (currNodeData.node.right) nodes.enqueue(currNodeData.node.right);
    }

    visibleValues.push(currNodeData.node.val);
  }

  return visibleValues;
};

console.log(
  rightSideView({
    val: 1,
    left: {
      val: 2,
      left: null,
      right: { val: 5, left: null, right: null },
    },
    right: {
      val: 3,
      left: null,
      right: { val: 4, left: null, right: null },
    },
  })
);
