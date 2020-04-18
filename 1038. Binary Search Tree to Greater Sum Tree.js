const bstToGst = (root) => {
  let currentSum = 0;
  const transform = (node) => {
    if (node === null) return;
    transform(node.right);
    currentSum += node.val;
    node.val = currentSum;
    transform(node.left);
  };

  transform(root);

  return root;
};

const bstToGstStack = (root) => {
  const nodes = [];
  let node = root,
    sum = 0;
  while (node || nodes.length) {
    while (node) {
      nodes.push(node);
      node = node.right;
    }

    node = nodes.pop();
    sum += node.val;
    node.val = sum;
    node = node.left;
  }

  return root;
};

console.log(
  bstToGst({
    val: 4,
    left: {
      val: 1,
      left: { val: 0, left: null, right: null },
      right: { val: 2, left: null, right: { val: 3, left: null, right: null } },
    },
    right: {
      val: 6,
      left: { val: 5, left: null, right: null },
      right: { val: 7, left: null, right: { val: 8, left: null, right: null } },
    },
  })
);
