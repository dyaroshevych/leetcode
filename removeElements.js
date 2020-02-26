const removeElements = (head, val) => {
  if (!head) {
    return head;
  }
  while (head && head.val === val) {
    head = head.next;
  }
  let currentNode = head;

  while (currentNode) {
    while (currentNode.next && currentNode.next.val === val) {
      currentNode.next = currentNode.next.next;
    }
    currentNode = currentNode.next;
  }

  return head;
};

console.log(
  removeElements(
    {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 6,
          next: { val: 3, next: { val: 4, next: { val: 6, next: null } } }
        }
      }
    },
    6
  )
);
