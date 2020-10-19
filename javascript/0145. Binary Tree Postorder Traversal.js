// recursive
// const postorderTraversal = (root) => {
//   const values = [];

//   const traverse = (node) => {
//     if (node === null) return;

//     traverse(node.left);
//     traverse(node.right);

//     values.push(node.val);
//   };

//   traverse(root);

//   return values;
// };

// iterative
const postorderTraversal = (root) => {
  if (root === null) return [];

  const nodes = [root],
    values = [];

  while (nodes.length) {
    const node = nodes.pop();

    values.push(node.val);

    if (node.left) nodes.push(node.left);
    if (node.right) nodes.push(node.right);
  }

  return values.reverse();
};

console.log(
  postorderTraversal({
    val: 1,
    left: null,
    right: {
      val: 2,
      left: { val: 3, left: null, right: null },
      right: null,
    },
  })
);
