// INPUT: 1
//       / \
//      2   3
//     / \
//    4   5
// OUTPUT: 3

const diameterOfBinaryTree = (root) => {
  let diameter = 0;

  const postorder = (currNode) => {
    if (!currNode) return;
    postorder(currNode.left);
    postorder(currNode.right);

    const currLeftDiameter = currNode.left ? currNode.left.diameter + 1 : 0;
    const currRightDiameter = currNode.right ? currNode.right.diameter + 1 : 0;

    diameter = Math.max(diameter, currLeftDiameter + currRightDiameter);
    currNode.diameter = Math.max(currLeftDiameter, currRightDiameter);
  };

  postorder(root);

  return diameter;
};

console.log(
  diameterOfBinaryTree({
    val: 1,
    left: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: { val: 5, left: null, right: null },
    },
    right: { val: 3, left: null, right: null },
  })
);
