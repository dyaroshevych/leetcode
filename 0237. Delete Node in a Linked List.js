// INPUT: 5 -> 1 -> 9
// OUTPUT: 1 -> 9

const deleteNodeLinearTime = (node) => {
  while (node) {
    if (node.next) {
      node.val = node.next.val;

      if (!node.next.next) {
        node.next = null;
      }
    }
    node = node.next;
  }
};

const deleteNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
};

console.log(
  deleteNode({
    val: 5,
    next: { val: 1, next: { val: 9, next: null } },
  })
);
