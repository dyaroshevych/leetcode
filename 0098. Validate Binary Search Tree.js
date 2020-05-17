// INPUT:     5
//           / \
//          1   4
//             / \
//            3   6
// OUTPUT: false

const isValidBST = (head, minValue = -Infinity, maxValue = Infinity) => {
  if (head === null) return true;

  return (
    head.val > minValue &&
    head.val < maxValue &&
    isValidBST(head.left, minValue, head.val) &&
    isValidBST(head.right, head.val, maxValue)
  );
};

console.log(
  isValidBST({
    val: 5,
    right: {
      val: 4,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: {
        val: 6,
        left: null,
        right: null,
      },
    },
    left: { val: 1, right: null, left: null },
  })
);
