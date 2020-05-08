const numComponents = (head, G) => {
  const values = new Set(G);

  let currNode = head,
    currComponentLength = 0,
    componentCount = 0;
  while (currNode) {
    if (values.has(currNode.val)) currComponentLength++;
    else if (currComponentLength > 0) {
      currComponentLength = 0;
      componentCount++;
    }

    currNode = currNode.next;
  }

  if (currComponentLength > 0) componentCount++;

  return componentCount;
};

console.log(
  numComponents(
    {
      val: 0,
      next: { val: 1, next: { val: 2, next: { val: 3, next: null } } },
    },
    [0, 1, 3]
  )
);
