const pathSum = (root, target) => helper(root, { 0: 1 }, 0, target);

const helper = (node, prevSums, currSum, target) => {
  if (node === null) {
    return 0;
  }

  currSum += node.val;

  let count = prevSums[currSum - target] || 0;

  prevSums[currSum] = (prevSums[currSum] || 0) + 1;

  count +=
    helper(node.left, prevSums, currSum, target) +
    helper(node.right, prevSums, currSum, target);

  prevSums[currSum]--;

  return count;
};

console.log(
  pathSum(
    {
      val: 10,
      left: {
        val: 5,
        left: {
          val: 3,
          left: {
            val: 3,
            left: null,
            right: null,
          },
          right: {
            val: -2,
            left: null,
            right: null,
          },
        },
        right: {
          val: 2,
          left: null,
          right: {
            val: 1,
            left: null,
            right: null,
          },
        },
      },
      right: {
        val: -3,
        left: null,
        right: {
          val: 11,
          left: null,
          right: null,
        },
      },
    },
    8
  )
);
