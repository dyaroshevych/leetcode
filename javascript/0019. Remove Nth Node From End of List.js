// INPUT: 1 -> 2 -> 3 -> 4 -> 5, 2
// OUTPUT: 1 -> 2 -> 3 -> 5

const removeNthFromEndLinearSpace = (head, n) => {
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

const removeNthFromEnd = (head, n) => {
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
  removeNthFromEnd(
    {
      val: 1,
      next: {
        val: 2,
        next: { val: 3, next: { val: 4, next: { val: 5, next: null } } }
      }
    },
    2
  )
);
