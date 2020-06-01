const deleteNode = (root, key) => {
  let parentNode = null,
    currNode = root;

  while (currNode) {
    if (key < currNode.val) {
      parentNode = currNode;
      currNode = currNode.left;
    } else if (key > currNode.val) {
      parentNode = currNode;
      currNode = currNode.right;
    } else break;
  }

  if (currNode === null) return root;

  if (currNode.left === null) {
    if (parentNode === null) root = root.right;
    else if (parentNode.left === currNode) parentNode.left = currNode.right;
    else parentNode.right = currNode.right;

    return root;
  }
  if (currNode.right === null) {
    if (parentNode === null) root = root.left;
    else if (parentNode.left === currNode) parentNode.left = currNode.left;
    else parentNode.right = currNode.left;
    return root;
  }

  if (currNode.left.right === null) {
    currNode.left.right = currNode.right;

    if (parentNode === null) root = root.left;
    else if (parentNode.left === currNode) parentNode.left = currNode.left;
    else parentNode.right = currNode.left;

    return root;
  }
  if (currNode.right.left === null) {
    currNode.right.left = currNode.left;

    if (parentNode === null) root = root.right;
    else if (parentNode.left === currNode) parentNode.left = currNode.right;
    else parentNode.right = currNode.right;

    return root;
  }

  let largestNodeParent = currNode.left;
  while (largestNodeParent.right && largestNodeParent.right.right)
    largestNodeParent = largestNodeParent.right;

  const temp = largestNodeParent.right;
  largestNodeParent.right = temp.left;
  temp.left = currNode.left;
  temp.right = currNode.right;
  if (parentNode === null) root = temp;
  else if (parentNode.left === currNode) parentNode.left = temp;
  else parentNode.right = temp;

  return root;
};

console.log(
  deleteNode(
    {
      val: 5,
      left: {
        val: 3,
        left: { val: 2, left: null, right: null },
        right: { val: 4, left: null, right: null },
      },
      right: {
        val: 6,
        left: null,
        right: { val: 7, left: null, right: null },
      },
    },
    3
  )
);
