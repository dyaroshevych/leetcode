const binaryTreePaths = (root) => {
  if (root === null) {
    return [];
  }

  return helper(root, [], []);
};

const helper = (node, currPath, paths) => {
  if (node === null) {
    return paths;
  }

  currPath += node.val;

  if (node.left === null && node.right === null) {
    paths.push(currPath);
  }

  currPath += "->";

  helper(node.left, currPath, paths);
  helper(node.right, currPath, paths);

  return paths;
};
