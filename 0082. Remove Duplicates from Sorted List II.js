const deleteDuplicates = (head) => {
  if (head === null) {
    return null;
  }

  let prev = null;
  let curr = head;

  while (curr) {
    if (curr.next && curr.val === curr.next.val) {
      do {
        curr = curr.next;
      } while (curr.next && curr.val === curr.next.val);

      if (prev) {
        prev.next = curr.next;
      } else {
        head = curr.next;
      }
    } else {
      prev = curr;
    }

    curr = curr.next;
  }

  return head;
};

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(3);
head.next.next.next.next.next = new ListNode(4);

console.log(deleteDuplicates(head));
