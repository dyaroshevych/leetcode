const middleNode = head => {
  let slow = (fast = head);

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

console.log(
  middleNode({
    val: 1,
    next: {
      val: 2,
      next: { val: 3, next: { val: 4, next: { val: 5, next: null } } }
    }
  })
);
