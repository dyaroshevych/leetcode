const mergeTrees = (root1, root2) => {
  if (!root1) return root2;

  const mergeNodes = (node1, node2) => {
    if (!node2) return;

    node1.val += node2.val;

    if (!node1.left) node1.left = node2.left;
    else mergeNodes(node1.left, node2.left);

    if (!node1.right) node1.right = node2.right;
    else mergeNodes(node1.right, node2.right);
  };

  mergeNodes(root1, root2);

  return root1;
};

console.log(
  mergeTrees(
    {
      val: 1,
      left: {
        val: 3,
        left: { val: 5, left: null, right: null },
        right: null,
      },
      right: { val: 2, left: null, right: null },
    },
    {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: { val: 4, left: null, right: null },
      },
      right: {
        val: 3,
        left: null,
        right: { val: 7, left: null, right: null },
      },
    }
  )
);
