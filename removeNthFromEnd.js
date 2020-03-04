const removeNthFromEnd = (head, n) => {
  if (n === 0) {
    return head;
  }
  const arr = [];

  while (head) {
    arr.push(head);
    head = head.next;
  }

  if (n === arr.length) {
    return arr[0] ? arr[0].next : arr[0];
  }
  if (n > arr.length) {
    return arr[0];
  }

  arr[arr.length - n - 1].next = arr[arr.length - n + 1]
    ? arr[arr.length - n + 1]
    : null;

  return arr[0];
};

const removeNthFromEndConstantSpace = (head, n) => {
  if (n <= 0) {
    return head;
  }

  let node = head,
    length = 0;
  while (node) {
    node = node.next;
    length++;
  }

  if (n > length) {
    return head;
  }

  if (n === length) {
    return head.next;
  }

  node = head;
  for (let i = 0; i < length - n - 1; i++) {
    node = node.next;
  }
  node.next = node.next ? node.next.next : null;

  return head;
};

console.log(
  removeNthFromEndConstantSpace(
    {
      val: 1,
      next: { val: 2, next: { val: 3, next: null } }
    },
    2
  )
);
