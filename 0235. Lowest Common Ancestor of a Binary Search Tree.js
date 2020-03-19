const lowestCommonAncestor = (root, node1, node2) => {
  if (node1.val < root.val && node2.val < root.val) {
    return lowestCommonAncestor(root.left, node1, node2);
  }
  if (node1.val > root.val && node2.val > root.val) {
    return lowestCommonAncestor(root.right, node1, node2);
  }
  return root;
};

const node1 = {
    val: 2,
    left: { val: 0, left: null, right: null },
    right: {
      val: 4,
      left: { val: 3, left: null, right: null },
      right: { val: 5, left: null, right: null }
    }
  },
  node2 = {
    val: 8,
    left: { val: 7, left: null, right: null },
    right: { val: 9, left: null, right: null }
  };

console.log(
  lowestCommonAncestor(
    {
      val: 6,
      left: node1,
      right: node2
    },
    node1,
    node2
  )
);
