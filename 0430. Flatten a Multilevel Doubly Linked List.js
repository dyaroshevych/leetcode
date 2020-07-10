const flatten = (head) => {
  // flattens given list starting from head and returns the last node from formed list
  const helper = (head) => {
    if (head === null) return null;

    let temp = head;

    while (head) {
      if (head.child) {
        const next = head.next;
        const lastNode = helper(head.child);

        head.next = head.child;
        head.child.prev = head;
        head.child = null;

        if (next) {
          lastNode.next = next;
          next.prev = lastNode;
        }
      }

      head = head.next;
      if (head) temp = head;
    }

    return temp;
  };

  helper(head);

  return head;
};
