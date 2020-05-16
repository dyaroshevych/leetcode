const oddEvenList = (head) => {
  if (head === null || head.next === null) return head;

  let even = head,
    odd = head.next;

  while (even.next && even.next.next) {
    const temp = even.next;
    even.next = even.next.next;
    even = even.next;
    temp.next = even.next;
  }

  even.next = odd;

  return head;
};

console.log(
  oddEvenList({
    val: 1,
    next: {
      val: 2,
      next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
    },
  })
);

// 1->2->1->2->1->2
// 1->2->1->2->1->2
