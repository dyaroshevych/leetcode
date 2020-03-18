const isPalindromeLinearSpace = head => {
  const values = [];

  while (head) {
    values.push(head.val);
    head = head.next;
  }

  for (let i = 0; i < values.length / 2; i++) {
    if (values[i] !== values[values.length - i - 1]) return false;
  }

  return true;
};

const isPalindrome = head => {
  const reverseList = head => {
    let prev = null,
      next = null;

    while (head) {
      next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }

    return prev;
  };

  if (!head || !head.next) return true;

  let slow = (fast = head);

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let halfList = reverseList(slow.next);

  while (halfList) {
    if (halfList.val !== head.val) return false;

    head = head.next;
    halfList = halfList.next;
  }

  return true;
};

console.log(
  isPalindrome({
    val: 1,
    next: { val: 2, next: { val: 3, next: { val: 1, next: null } } }
  })
);
