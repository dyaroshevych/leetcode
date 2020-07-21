// INPUT: [ 5, 3, 6, 2, 4, null, 7 ], target: 9
// OUTPUT: true

const findTarget = (root, target) => {
  const nums = [];

  const traverse = (node) => {
    if (node === null) return;

    traverse(node.left);
    nums.push(node.val);
    traverse(node.right);
  };

  traverse(root);

  if (nums.length <= 1) return false;

  let low = 0,
    high = nums.length - 1;
  while (low < high) {
    const currSum = nums[low] + nums[high];

    if (currSum < target) {
      low++;
    } else if (currSum > target) {
      high--;
    } else return true;
  }

  return false;
};

console.log(
  findTarget(
    {
      val: 5,
      left: {
        val: 3,
        left: { val: 2, left: null, right: null },
        right: { val: 4, left: null, right: null },
      },
      right: { val: 6, left: null, right: { val: 7, left: null, right: null } },
    },
    9
  )
);
