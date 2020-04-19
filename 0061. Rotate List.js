const rotateRight = (head, k) => {
  if (head === null || head.next === null || k === 0) return head;

  let node = head,
    listLength = 1;

  while (node.next) {
    node = node.next;
    listLength++;
  }

  newTailIdx = listLength - (k % listLength) - 1;

  if (newTailIdx === listLength - 1) return head;

  let newTail = head;
  for (let i = 0; i < newTailIdx; i++) {
    newTail = newTail.next;
  }

  const newHead = newTail.next;
  newTail.next = null;
  node.next = head;

  return newHead;
};

console.log(
  rotateRight(
    {
      val: 1,
      next: {
        val: 2,
        next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
      },
    },
    2
  )
);

// 0 1 2
// 2 0 1
