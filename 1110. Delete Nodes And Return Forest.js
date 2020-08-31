// O(N + K) time | O(N + K) space
const delNodes = (root, toDeleteArr) => {
  const toDelete = new Set(toDeleteArr);
  const finalRoots = [];
  const stack = [root];

  while (stack.length) {
    const currRoot = stack.pop();

    if (currRoot === null) {
      continue;
    }

    if (!helper(currRoot, stack, toDelete)) {
      finalRoots.push(currRoot);
    }
  }

  return finalRoots;
};

const helper = (node, stack, toDelete) => {
  if (node === null) {
    return false;
  }

  if (toDelete.has(node.val)) {
    stack.push(node.left);
    stack.push(node.right);

    return true;
  }

  if (helper(node.left, stack, toDelete)) {
    node.left = null;
  }

  if (helper(node.right, stack, toDelete)) {
    node.right = null;
  }

  return false;
};

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
root.right.left.left = new TreeNode(8);
root.right.left.right = new TreeNode(9);

console.log(delNodes(root, [2, 3, 5, 9]));
