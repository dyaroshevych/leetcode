class QueueNode {
  constructor(parentVal, node, next = null) {
    this.parentVal = parentVal;
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

  enqueue(parentVal, node) {
    const newNode = new QueueNode(parentVal, node);

    if (this.length === 0) this.head = newNode;
    else this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  dequeue() {
    if (this.length === 0) return null;
    if (this.length === 1) this.tail = null;

    const nodeData = [this.head.node, this.head.parentVal];
    this.head = this.head.next;
    this.length--;

    return nodeData;
  }
}

const isCousins = (root, val1, val2) => {
  const nodes = new Queue();

  nodes.enqueue(null, root);

  let currNode = null,
    foundNodeParentVal = 0;
  while (nodes.length || currNode) {
    let nodesLength = nodes.length;

    for (let i = 0; i < nodesLength; i++) {
      [currNode, currParentVal] = nodes.dequeue();

      if (currNode.left) nodes.enqueue(currNode.val, currNode.left);
      if (currNode.right) nodes.enqueue(currNode.val, currNode.right);

      if (currNode.val === val1 || currNode.val === val2) {
        if (foundNodeParentVal === currParentVal) return false;
        else if (foundNodeParentVal) return true;
        else foundNodeParentVal = currParentVal;
      }
    }

    if (foundNodeParentVal) return false;
  }
};

console.log(
  isCousins(
    {
      val: 1,
      left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: null,
      },
      right: { val: 3, left: null, right: { val: 5, left: null, right: null } },
    },
    4,
    5
  )
);
