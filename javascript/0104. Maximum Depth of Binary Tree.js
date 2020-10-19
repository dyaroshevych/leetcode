// INPUT: 3
//       / \
//      9   20
//         /  \
//        15   7

const maxDepth = (node) => {
  if (node === null) {
    return 0;
  }

  return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
};

console.log(
  maxDepth({
    val: 3,
    right: {
      val: 20,
      right: { val: 7, right: null, left: null },
      left: { val: 15, right: null, left: null },
    },
    left: { val: 9, right: null, left: null },
  })
);
