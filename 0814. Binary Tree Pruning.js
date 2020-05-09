const pruneTree = (root) => {
  const pruneNode = (node) => {
    if (node === null) return null;

    node.left = pruneNode(node.left);
    node.right = pruneNode(node.right);

    return node.left || node.right || node.val ? node : null;
  };

  root = pruneNode(root);
  return root;
};

console.log(
  pruneTree({
    val: 1,
    left: null,
    right: {
      val: 0,
      left: { val: 0, left: null, right: null },
      right: { val: 1, left: null, right: null },
    },
  })
);
