// INPUT: 2 -> 4 -> 3, 5 -> 6 -> 4
// OUTPUT: 7 -> 0 -> 8
// EXPLANATION: 342 + 465 = 807

const addTwoNumbers = (l1, l2) => {
  const ans = {};

  let temp = 0,
    l1Node = l1,
    l2Node = l2,
    ansNode = ans;

  while (l1Node || l2Node || temp) {
    ansNode.next = {};
    ansNode = ansNode.next;
    const currentSum =
      (l1Node ? l1Node.val : 0) + (l2Node ? l2Node.val : 0) + temp;

    ansNode.val = currentSum % 10;
    temp = Math.floor(currentSum / 10);
    l1Node = l1Node ? l1Node.next : null;
    l2Node = l2Node ? l2Node.next : null;
  }

  return ans.next;
};

console.log(
  addTwoNumbers(
    {
      val: 2,
      next: { val: 4, next: { val: 3, next: null } }
    },
    {
      val: 5,
      next: { val: 6, next: { val: 4, next: null } }
    }
  )
);
