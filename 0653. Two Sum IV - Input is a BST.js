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
  findTarget({
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null },
  })
);
