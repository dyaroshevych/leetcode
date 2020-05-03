// INPUT: 1
//      /   \
//     2     3
// OUTPUT: 1

const findTilt = (root) => {
  let tiltSum = 0;

  const traverse = (node) => {
    if (node === null) return 0;

    const leftSum = traverse(node.left),
      rightSum = traverse(node.right);

    tiltSum += Math.abs(leftSum - rightSum);

    return leftSum + node.val + rightSum;
  };

  traverse(root);

  return tiltSum;
};

console.log(
  findTilt({
    val: 1,
    left: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: null,
    },
    right: {
      val: 3,
      left: { val: 5, left: null, right: null },
      right: null,
    },
  })
);
