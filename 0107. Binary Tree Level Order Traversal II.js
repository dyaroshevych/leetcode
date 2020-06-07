const levelOrderBottom = (root) => {
  const tree = [];

  const traverse = (node, level) => {
    if (node === null) return;
    if (!tree[level]) tree.push([]);

    tree[level].push(node.val);
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  };

  traverse(root, 0);

  for (let i = 0; i < tree.length / 2; i++)
    [tree[i], tree[tree.length - i - 1]] = [tree[tree.length - i - 1], tree[i]];

  return tree;
};

console.log(
  levelOrderBottom({
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
      val: 20,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
  })
);
