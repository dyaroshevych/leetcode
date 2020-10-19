// INPUT: 1 -> 2 -> 3 -> 4
// OUTPUT: 1 -> 4 -> 2 -> 3

const reorderList = (head) => {
  if (head === null || head.next === null) {
    return;
  }

  let p1 = head;
  let p2 = head.next;

  // find the middle of the list
  while (p2.next && p2.next.next) {
    p1 = p1.next;
    p2 = p2.next.next;
  }

  let prev = null;
  let curr = p1.next;

  // reverse second half of the list
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  p1.next = prev;

  // reorder the list
  let first = head;
  let second = prev;

  while (second) {
    const firstNext = first.next;
    first.next = second;
    first = firstNext;

    const secondNext = second.next;
    if (firstNext === prev) {
      break;
    }
    second.next = firstNext;
    second = secondNext;
  }
};

const list = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: null } },
  },
};

reorderList(list);
console.log(list);
