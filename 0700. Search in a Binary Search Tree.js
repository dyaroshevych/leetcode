const searchBST = (root, val) => {
  let currNode = root;

  while (currNode) {
    if (val < currNode.val) {
      currNode = currNode.left;
    } else if (val > currNode.val) {
      currNode = currNode.right;
    } else break;
  }

  return currNode;
};

console.log(
  searchBST(
    {
      val: 4,
      left: {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 3, left: null, right: null },
      },
      right: { val: 7, left: null, right: null },
    },
    2
  )
);
