const sufficientSubset = (root, limit) =>
  helper(root, limit, 0) < limit ? null : root;

const helper = (node, limit, currPathSum) => {
  if (node === null) {
    return 0;
  }

  if (node.left === null && node.right === null) {
    return node.val;
  }

  currPathSum += node.val;

  const leftMaxPathSum = node.left
    ? helper(node.left, limit, currPathSum)
    : -Infinity;
  const rightMaxPathSum = node.right
    ? helper(node.right, limit, currPathSum)
    : -Infinity;

  if (currPathSum + leftMaxPathSum < limit) {
    node.left = null;
  }

  if (currPathSum + rightMaxPathSum < limit) {
    node.right = null;
  }

  return Math.max(leftMaxPathSum, rightMaxPathSum) + node.val;
};

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(-3);
root.right = new TreeNode(-4);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(1);

console.log(sufficientSubset(root, 1));
