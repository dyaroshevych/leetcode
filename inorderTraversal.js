class Stack {
  constructor(root) {
    this.head = null;
  }

  push(node) {
    this.head = { node: node, next: this.head };
  }

  pop() {
    if (this.head === null) {
      return null;
    }
    const node = this.head.node;
    this.head = this.head.next;
    return node;
  }
}

const inorderTraversal = root => {
  const inorder = [];
  if (root === null) {
    return inorder;
  }
  const stack = new Stack();

  let currentNode = root;
  do {
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }

    currentNode = stack.pop();
    inorder.push(currentNode.val);

    currentNode = currentNode.right;
  } while (stack.head || currentNode);

  return inorder;
};

console.log(
  inorderTraversal({
    val: 5,
    right: {
      val: 4,
      left: {
        val: 3,
        left: null,
        right: null
      },
      right: {
        val: 6,
        left: null,
        right: null
      }
    },
    left: { val: 1, right: null, left: null }
  })
);
