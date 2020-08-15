// INPUT: 5
//       / \
//      4   8
//     /   / \
//    11  13  4
//   /  \      \
//  7    2      1
// target: 22
// OUTPUT: true

const hasPathSum = (root, target) => helper(root, 0, target);

const helper = (node, currSum, target) => {
  if (node === null) {
    return false;
  }

  currSum += node.val;

  return (
    (currSum === target && node.left === null && node.right === null) ||
    helper(node.left, currSum, target) ||
    helper(node.right, currSum, target)
  );
};

console.log(
  hasPathSum(
    {
      val: 5,
      left: {
        val: 4,
        left: {
          val: 11,
          left: {
            val: 7,
            left: null,
            right: null,
          },
          right: {
            val: 2,
            left: null,
            right: null,
          },
        },
        right: null,
      },
      right: {
        val: 8,
        left: {
          val: 23,
          left: null,
          right: null,
        },
        right: {
          val: 4,
          left: null,
          right: {
            val: 1,
            left: null,
            right: null,
          },
        },
      },
    },
    22
  )
);
