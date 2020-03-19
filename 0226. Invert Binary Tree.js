const invertTreeRecursive = root => {
  if (!root) return root;

  [root.left, root.right] = [
    invertTreeRecursive(root.right),
    invertTreeRecursive(root.left)
  ];

  return root;
};

const invertTree = root => {
  const nodes = [];
  let node = root;

  while (node || nodes.length) {
    if (node) {
      nodes.push(node);
      node = node.left;
    } else {
      const temp = nodes.pop();
      node = temp.right;
      temp.right = temp.left;
      temp.left = node;
    }
  }
  return root;
};

console.log(
  invertTreeRecursive({
    val: 4,
    left: {
      val: 2,
      left: { val: 1, left: null, right: null },
      right: { val: 3, left: null, right: null }
    },
    right: {
      val: 7,
      left: { val: 6, left: null, right: null },
      right: { val: 9, left: null, right: null }
    }
  })
);
