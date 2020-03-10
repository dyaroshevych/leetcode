const swapPairs = head => {
  let prevNode = null,
    leftNode = head,
    rightNode = head ? head.next : null;

  while (leftNode && rightNode) {
    leftNode.next = rightNode.next;
    rightNode.next = leftNode;
    if (prevNode) {
      prevNode.next = rightNode;
    } else {
      head = rightNode;
      prevNode = head.next;
    }
    prevNode = leftNode;
    leftNode = leftNode.next;
    rightNode = leftNode ? leftNode.next : null;
  }

  return head;
};

console.log(
  swapPairs({
    val: 1,
    next: { val: 2, next: { val: 3, next: { val: 4, next: null } } }
  })
);
