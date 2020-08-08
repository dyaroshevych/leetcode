const hasPathSum = (root, target) => helper(root, 0, target);

const helper = (node, currSum, target) => {
  if (node === null) {
    return false;
  }

  currSum += node.val;

  return (
    (currSum === target && node.left === null && node.right === null) ||
    helper(node.left, currSum, target) ||
    helper(node.right, currSum, target)
  );
};
