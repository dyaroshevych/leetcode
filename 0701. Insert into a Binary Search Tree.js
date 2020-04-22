const insertIntoBST = (root, val) => {
  const newNode = { val: val, left: null, right: null };
  if (root === null) return newNode;

  let currNode = root;

  while (true) {
    if (val < currNode.val) {
      if (currNode.left) currNode = currNode.left;
      else {
        currNode.left = newNode;
        break;
      }
    } else {
      if (currNode.right) currNode = currNode.right;
      else {
        currNode.right = newNode;
        break;
      }
    }
  }

  return root;
};

console.log(
  insertIntoBST(
    {
      val: 4,
      left: {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 3, left: null, right: null },
      },
      right: { val: 7, left: null, right: null },
    },
    5
  )
);
