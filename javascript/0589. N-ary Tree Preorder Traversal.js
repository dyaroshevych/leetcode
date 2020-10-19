// recursive
// const preorder = (root) => {
//   const getPreorder = (node, preorderArr) => {
//     if (node === null) return;

//     preorderArr.push(node.val);

//     node.children.forEach((childNode) => getPreorder(childNode, preorderArr));
//   };

//   const nodes = [];
//   getPreorder(root, nodes);

//   return nodes;
// };

// iterative
const preorder = (root) => {
  if (root === null) return [];

  const nodes = [],
    stack = [root];

  while (stack.length) {
    const currNode = stack.pop();

    nodes.push(currNode.val);

    for (let i = currNode.children.length - 1; i >= 0; i--)
      stack.push(currNode.children[i]);
  }

  return nodes;
};

console.log(
  preorder({
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
