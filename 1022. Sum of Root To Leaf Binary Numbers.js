const sumRootToLeaf = (root, sum = 0) => {
  if (root === null) {
    return 0;
  }

  sum = (sum << 1) + root.val;

  if (root.left === null && root.right === null) {
    return sum;
  }

  return sumRootToLeaf(root.left, sum) + sumRootToLeaf(root.right, sum);
};
