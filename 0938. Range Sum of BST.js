// INPUT: 10
//       /  \
//      5    15
//     / \    \
//    3   7    18
// min: 7, max: 15
// OUTPUT: 32

const rangeSumBST = (root, min, max) => {
  const traverse = (node) => {
    if (node === null) return 0;
    if (node.val > max) return traverse(node.left);
    if (node.val < min) return traverse(node.right);

    return traverse(node.left) + node.val + traverse(node.right);
  };

  return traverse(root);
};

console.log(
  rangeSumBST(
    {
      val: 10,
      left: {
        val: 5,
        left: { val: 3, left: null, right: null },
        right: { val: 7, left: null, right: null },
      },
      right: {
        val: 15,
        left: null,
        right: { val: 18, left: null, right: null },
      },
    },
    7,
    15
  )
);
