const splitListToParts = (head, partsCount) => {
  let listLength = 0,
    currNode = head;
  while (currNode) {
    currNode = currNode.next;
    listLength++;
  }

  const nodesPerPart = Math.floor(listLength / partsCount);
  listParts = [];

  currNode = head;
  for (
    let currPartIdx = 1;
    currPartIdx < Math.min(partsCount, listLength);
    currPartIdx++
  ) {
    const currPart = currNode;
    for (
      let i = currPartIdx <= listLength % partsCount ? 0 : 1;
      i < nodesPerPart;
      i++
    )
      currNode = currNode.next;
    const temp = currNode.next;
    currNode.next = null;
    currNode = temp;
    listParts.push(currPart);
  }

  if (currNode) listParts.push(currNode);

  for (let i = listLength; i < partsCount; i++) {
    listParts.push(null);
  }

  return listParts;
};

console.log(
  splitListToParts(
    {
      val: 1,
      next: {
        val: 2,
        next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
      },
    },
    3
  )
);
