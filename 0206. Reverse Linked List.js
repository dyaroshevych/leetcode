const reverseListLinearSpace = head => {
  const values = [];

  while (head) {
    values.push(head.val);
    head = head.next;
  }

  let result = null;
  for (let i = 0; i < values.length; i++) {
    result = { val: values[i], next: result };
  }

  return result;
};

const reverseList = head => {
  let prev = null,
    curr = head;

  while (curr) {
    const temp = curr.next;

    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
};

console.log(
  reverseList({
    val: 1,
    next: {
      val: 2,
      next: { val: 3, next: { val: 4, next: { val: 5, next: null } } }
    }
  })
);
