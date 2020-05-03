class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class QueueNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(data) {
    const newNode = new QueueNode(data, null);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  dequeue() {
    if (this.length === 0) return null;
    if (this.length === 1) this.tail = null;

    const data = this.head.data;
    this.head = this.head.next;
    this.length--;

    return data;
  }
}

const serialize = (root) => {
  const queue = new Queue(),
    nodes = [];
  let currNode = root;

  queue.enqueue(currNode);

  while (currNode || queue.length) {
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      currNode = queue.dequeue();

      if (currNode) {
        nodes.push(currNode.val);
        queue.enqueue(currNode.left);
        queue.enqueue(currNode.right);
      } else {
        nodes.push(null);
      }
    }
  }

  return nodes;
};

const deserialize = (nodes) => {
  if (nodes.length === 1) return null;

  const queue = new Queue(),
    root = new TreeNode(nodes[0]);
  let currNode = null,
    currIdx = 1;

  queue.enqueue(root);

  while (queue.length) {
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      currNode = queue.dequeue();

      if (currNode && currIdx * 2 - 1 < nodes.length) {
        if (nodes[currIdx * 2 - 1] !== null) {
          currNode.left = new TreeNode(nodes[currIdx * 2 - 1]);
          queue.enqueue(currNode.left);
        }

        if (currIdx * 2 < nodes.length) {
          if (nodes[currIdx * 2] !== null) {
            currNode.right = new TreeNode(nodes[currIdx * 2]);
            queue.enqueue(currNode.right);
          }
        }
      }

      currIdx++;
    }
  }

  return root;
};

console.log(
  deserialize(
    serialize({
      val: 1,
      left: { val: 2, left: null, right: null },
      right: {
        val: 3,
        left: { val: 4, left: null, right: null },
        right: { val: 5, left: null, right: null },
      },
    })
  )
);
