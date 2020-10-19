// recursive
// const postorder = (root) => {
//   const getPostorder = (node, values) => {
//     if (node === null) return;

//     for (let i = 0; i < node.children.length; i++)
//       getPostorder(node.children[i], values);

//     values.push(node.val);
//   };

//   const values = [];
//   getPostorder(root, values);

//   return values;
// };

// iterative
const postorder = (root) => {
  if (root === null) return [];

  const values = [],
    nodes = [root];

  while (nodes.length) {
    const node = nodes.pop();

    values.push(node.val);

    for (let i = 0; i < node.children.length; i++) nodes.push(node.children[i]);
  }

  return values.reverse();
};

console.log(
  postorder({
    val: 1,
    children: [
      {
        val: 3,
        children: [
          { val: 5, children: [] },
          { val: 6, children: [] },
        ],
      },
      { val: 2, children: [] },
      { val: 4, children: [] },
    ],
  })
);
