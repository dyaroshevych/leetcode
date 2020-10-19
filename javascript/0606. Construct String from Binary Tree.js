// INPUT: 1
//       / \
//      2   3
//       \
//        4
// OUTPUT: 1(2()(4))(3)

const tree2str = (root) => {
  if (root === null) return "";

  const leftStr = tree2str(root.left),
    rightStr = tree2str(root.right);

  return `${root.val}${(leftStr || rightStr) && `(${leftStr})`}${
    rightStr && `(${rightStr})`
  }`;
};

console.log(
  tree2str({
    val: 1,
    left: {
      val: 2,
      left: null,
      right: { val: 4, left: null, right: null },
    },
    right: { val: 3, left: null, right: null },
  })
);
