const isMirror = (left, right) => {
  if (!left && !right) {
    return true;
  }
  if (!left || !right) {
    return false;
  }
  return (
    left.val === right.val &&
    isMirror(left.left, right.right) &&
    isMirror(left.right, right.left)
  );
};

const isSymmetric = root => isMirror(root, root);

console.log(
  isSymmetric({
    val: 1,
    right: {
      val: 2,
      right: { val: 3, right: null, left: null },
      left: { val: 4, right: null, left: null }
    },
    left: {
      val: 2,
      right: { val: 4, right: null, left: null },
      left: { val: 3, right: null, left: null }
    }
  })
);
