const reverseBetween = (head, idxFrom, idxTo) => {
  if (idxFrom === idxTo) return head;
  let prevNode = null,
    currNode = head;

  for (let _ = 1; _ < idxFrom; _++) {
    prevNode = currNode;
    currNode = currNode.next;
  }

  const startNode = prevNode,
    tailNode = currNode;

  for (let _ = idxFrom; _ <= idxTo; _++) {
    const nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }

  if (startNode) {
    startNode.next = prevNode;
  } else {
    head = prevNode;
  }

  tailNode.next = currNode;

  return head;
};

console.log(
  reverseBetween(
    {
      val: 1,
      next: {
        val: 2,
        next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
      },
    },
    2,
    4
  )
);
