// INPUT: 1         1
//       / \       / \
//      2   3     2   3

// OUTPUT: true

const isSameTree = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.log(
  isSameTree(
    {
      val: 1,
      right: { val: 3, right: null, left: null },
      left: { val: 2, right: null, left: null }
    },
    {
      val: 1,
      right: { val: 3, right: null, left: null },
      left: { val: 2, right: null, left: null }
    }
  )
);
