// INPUT: 2        1
//       / \      / \
//      1   4    0   3
// OUTPUT: [ 0, 1, 1, 2, 3, 4 ]

const getAllElements = (root1, root2) => {
  const nodes1 = [];
  fillNodes(root1, nodes1);

  const nodes2 = [];
  fillNodes(root2, nodes2);

  const nodes = new Array(nodes1.length + nodes2.length);

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < nodes1.length && pointer2 < nodes2.length) {
    if (nodes1[pointer1] < nodes2[pointer2]) {
      nodes[pointer1 + pointer2] = nodes1[pointer1];
      pointer1++;
    } else {
      nodes[pointer1 + pointer2] = nodes2[pointer2];
      pointer2++;
    }
  }

  while (pointer1 < nodes1.length) {
    nodes[pointer1 + pointer2] = nodes1[pointer1];
    pointer1++;
  }

  while (pointer2 < nodes2.length) {
    nodes[pointer1 + pointer2] = nodes2[pointer2];
    pointer2++;
  }

  return nodes;
};

const fillNodes = (root, nodes) => {
  if (root === null) {
    return;
  }

  fillNodes(root.left, nodes);
  nodes.push(root.val);
  fillNodes(root.right, nodes);
};
