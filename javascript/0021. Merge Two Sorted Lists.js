class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const mergeTwoLists = (root1, root2) => {
  if (root1 === null) return root2;
  if (root2 === null) return root1;

  if (root1.val > root2.val) {
    const temp = root1;
    root1 = root2;
    root2 = temp;
  }

  let parentNode = root1;

  while (root2 && parentNode.next) {
    if (parentNode.next.val < root2.val) {
      parentNode = parentNode.next;
    } else {
      parentNode.next = new Node(root2.val, parentNode.next);
      parentNode = parentNode.next;
      root2 = root2.next;
    }
  }

  if (root2) {
    parentNode.next = root2;
  }

  return root1;
};

console.log(
  mergeTwoLists(
    {
      val: 1,
      next: { val: 2, next: { val: 4, next: null } },
    },
    {
      val: 1,
      next: { val: 3, next: { val: 4, next: null } },
    }
  )
);
