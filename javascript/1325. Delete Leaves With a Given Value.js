// INPUT: 1
//      /   \
//     2     3
//    /     / \
//   2     2   4
// value to remove: 2
// OUTPUT: 1
//          \
//           3
//            \
//             4

const removeLeafNodes = (root, target) => {
  const shouldDelete = (node) => {
    if (node === null) return false;
    if (shouldDelete(node.left)) node.left = null;
    if (shouldDelete(node.right)) node.right = null;
    if (node.left === null && node.right === null && node.val === target)
      return true;

    return false;
  };

  if (shouldDelete(root)) return null;
  return root;
};

console.log(
  removeLeafNodes(
    {
      val: 1,
      left: {
        val: 2,
        left: { val: 2, left: null, right: null },
        right: null,
      },
      right: {
        val: 3,
        left: { val: 2, left: null, right: null },
        right: { val: 4, left: null, right: null },
      },
    },
    2
  )
);
