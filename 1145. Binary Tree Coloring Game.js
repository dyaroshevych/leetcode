const btreeGameWinningMove = (root, N, xVal) => {
  const countNodes = (node) => {
    if (node === null) return 0;

    return 1 + countNodes(node.left) + countNodes(node.right);
  };

  const canWin = (node) => {
    if (node === null) return false;

    if (node.val === xVal) {
      const leftNodesCount = countNodes(node.left),
        rightNodesCount = countNodes(node.right);

      return (
        leftNodesCount * 2 > N ||
        rightNodesCount * 2 > N ||
        (leftNodesCount + rightNodesCount + 1) * 2 < N
      );
    } else {
      return canWin(node.left) || canWin(node.right);
    }
  };

  return canWin(root);
};

console.log(
  btreeGameWinningMove(
    {
      val: 1,
      left: {
        val: 2,
        left: {
          val: 4,
          left: { val: 8, left: null, right: null },
          right: { val: 9, left: null, right: null },
        },
        right: {
          val: 5,
          left: { val: 10, left: null, right: null },
          right: { val: 11, left: null, right: null },
        },
      },
      right: {
        val: 3,
        left: { val: 6, left: null, right: null },
        right: { val: 7, left: null, right: null },
      },
    },
    11,
    3
  )
);
