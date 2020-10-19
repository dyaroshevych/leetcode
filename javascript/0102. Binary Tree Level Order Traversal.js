// INPUT: 3
//       / \
//      9  20
//        /  \
//       15   7
// OUTPUT: [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]

const levelOrderIterative = (root) => {
  if (root === null) return [];

  let currLevel = [root];
  const tree = [];

  while (currLevel.length) {
    tree.push(currLevel);
    currLevel = [];

    tree[tree.length - 1].forEach((node) => {
      if (node.left) currLevel.push(node.left);
      if (node.right) currLevel.push(node.right);
    });
  }

  return tree.map((level) => level.map((node) => node.val));
};

const levelOrder = (root) => {
  const tree = [];

  const helper = (node, level) => {
    if (node === null) return;

    if (tree.length === level) {
      tree.push([]);
    }

    tree[level].push(node.val);

    helper(node.left, level + 1);
    helper(node.right, level + 1);
  };

  helper(root, 0);

  return tree;
};

console.log(
  levelOrder({
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
      val: 20,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
  })
);
