// INPUT: 1
//       / \
//      2   3
// OUTPUT: 6

const maxPathSum = (root) => {
  if (root === null) return 0;

  let maxSum = root.val;

  const getMaxPathSum = (node) => {
    if (node === null) return 0;
    const leftMaxSum = Math.max(getMaxPathSum(node.left), 0),
      rightMaxSum = Math.max(getMaxPathSum(node.right), 0);

    maxSum = Math.max(maxSum, node.val + leftMaxSum + rightMaxSum);

    return node.val + Math.max(leftMaxSum, rightMaxSum);
  };

  getMaxPathSum(root);

  return maxSum;
};

console.log(
  maxPathSum({
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
  })
);
