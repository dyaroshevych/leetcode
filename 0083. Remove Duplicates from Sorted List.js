// INPUT: 1 -> 1 -> 2
// OUTPUT: 1 -> 2

const deleteDuplicates = list => {
  let node = list,
    prevNode = list;

  while (node) {
    while (node && node.val === prevNode.val) {
      node = node.next;
    }
    prevNode.next = node;
    prevNode = prevNode.next;
  }

  return list;
};

console.log(
  deleteDuplicates({
    val: 1,
    next: { val: 1, next: { val: 2, next: null } }
  })
);
