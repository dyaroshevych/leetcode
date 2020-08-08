// INPUT: 1
//       / \
//      2   3
//       \
//        5
// OUTPUT: [ '1->2->5', '1->3' ]

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

console.log(
  binaryTreePaths({
    val: 1,
    left: {
      val: 2,
      left: null,
      right: {
        val: 5,
        left: null,
        right: null,
      },
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  })
);
