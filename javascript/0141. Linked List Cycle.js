// time O(n), space O(n)
const hasCycleLinearSpace = head => {
  const nodes = new Set();
  while (head) {
    if (nodes.has(head)) {
      return true;
    }
    nodes.add(head);
    head = head.next;
  }

  return false;
};

// time O(n), space O(1)
const hasCycle = head => {
  if (head === null || head.next === null) {
    return false;
  }
  let slowPointer = head,
    fastPointer = head.next;

  while (slowPointer && fastPointer) {
    if (slowPointer === fastPointer) {
      return true;
    }
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next && fastPointer.next.next;
  }

  return false;
};
