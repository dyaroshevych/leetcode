class Stack {
  constructor() {
    this.head = null;
  }

  push(node, depth) {
    this.head = { node: node, depth: depth, next: this.head };
  }

  pop() {
    if (this.head === null) {
      return null;
    }
    const currentNode = this.head;
    this.head = this.head.next;
    return currentNode;
  }
}

const maxDepth = root => {
  const nodes = new Stack();

  let maxDepth = 0,
    currentDepth = 0;

  while (root || nodes.head) {
    if (root) {
      currentDepth++;
      maxDepth = Math.max(maxDepth, currentDepth);
      nodes.push(root, currentDepth);
      root = root.left;
    } else {
      const currentNode = nodes.pop();
      if (currentNode) {
        root = currentNode.node.right;
        currentDepth = currentNode.depth;
      }
    }
  }

  return maxDepth;
};

console.log(
  maxDepth({
    val: 3,
    right: {
      val: 20,
      right: { val: 7, right: null, left: null },
      left: { val: 15, right: null, left: null }
    },
    left: { val: 9, right: null, left: null }
  })
);
