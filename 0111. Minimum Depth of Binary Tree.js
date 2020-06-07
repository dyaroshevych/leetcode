const minDepth = (root) => {
  if (root === null) return 0;

  if (root.left === null && root.right === null) return 1;

  return (
    1 +
    Math.min(minDepth(root.left) || Infinity, minDepth(root.right) || Infinity)
  );
};

console.log(
  minDepth({
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
      val: 20,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
  })
);
