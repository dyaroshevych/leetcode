// INPUT: 0 -> 9 -> 2 -> 4
//                /
//        5 -> 3 /
// OUTPUT: 2 -> 4

const getIntersectionNode = (headA, headB) => {
  let pointerA = headA,
    pointerB = headB;

  while (pointerA || pointerB) {
    if (pointerA === pointerB) {
      return pointerA;
    }
    if (pointerA === null) {
      pointerA = headB;
      pointerB = pointerB.next;
    } else if (pointerB === null) {
      pointerB = headA;
      pointerA = pointerA.next;
    } else {
      pointerA = pointerA.next;
      pointerB = pointerB.next;
    }
  }

  return null;
};

const list = { val: 2, next: { val: 4, next: null } };

console.log(
  getIntersectionNode(
    {
      val: 0,
      next: { val: 9, next: { val: 1, next: list } },
    },
    {
      val: 5,
      next: { val: 3, next: list },
    }
  )
);
