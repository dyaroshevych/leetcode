// INPUT: 3
//       / \
//      9  20
//        /  \
//       15   7
// OUTPUT: true

const isBalanced = (root) => {
  const getDepth = (node) => {
    if (node === null) return 0;

    const leftSubtreeDepth = getDepth(node.left),
      rightSubtreeDepth = getDepth(node.right);

    if (
      leftSubtreeDepth === -1 ||
      rightSubtreeDepth === -1 ||
      Math.abs(leftSubtreeDepth - rightSubtreeDepth) > 1
    )
      return -1;

    return Math.max(leftSubtreeDepth, rightSubtreeDepth) + 1;
  };

  const rootDepth = getDepth(root);

  return rootDepth >= 0;
};

console.log(
  isBalanced({
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
      val: 20,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
  })
);
