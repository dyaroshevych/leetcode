const pathSum = (root, target) => helper(root, 0, [], target, []);

const helper = (node, currSum, currPath, target, paths) => {
  if (node === null) {
    return paths;
  }

  currSum += node.val;

  currPath.push(node.val);

  if (currSum === target && node.left === null && node.right === null) {
    paths.push([...currPath]);
  } else {
    helper(node.left, currSum, currPath, target, paths);
    helper(node.right, currSum, currPath, target, paths);
  }

  currPath.pop();

  return paths;
};
