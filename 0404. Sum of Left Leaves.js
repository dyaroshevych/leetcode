const sumOfLeftLeaves = (root) => {
  let leftLeavesSum = 0;

  const countLeftLeaves = (node) => {
    if (node === null) return false;

    if (node.left === null && node.right === null) {
      return true;
    }

    if (countLeftLeaves(node.left)) {
      leftLeavesSum += node.left.val;
    }
    countLeftLeaves(node.right);
    return false;
  };

  countLeftLeaves(root);

  return leftLeavesSum;
};

console.log(
  sumOfLeftLeaves({
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
      val: 20,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
  })
);
