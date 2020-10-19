// INPUT: 1
//      / | \
//     3  2  4
//    / \
//   5   6
// OUTPUT: [ [ 1 ], [ 3, 2, 4 ], [ 5, 6 ] ]

const levelOrder = (root) => {
  if (root === null) return [];

  const treeLevels = [];

  let currLevel = [root];

  while (currLevel.length) {
    treeLevels.push(currLevel.map((node) => node.val));

    for (let i = 0; i < treeLevels[treeLevels.length - 1].length; i++) {
      currLevel.push(...currLevel[i].children);
    }

    currLevel.splice(0, treeLevels[treeLevels.length - 1].length);
  }

  return treeLevels;
};

console.log(
  levelOrder({
    val: 1,
    children: [
      {
        val: 3,
        children: [
          { val: 5, children: [] },
          { val: 6, children: [] },
        ],
      },
      { val: 2, children: [] },
      { val: 4, children: [] },
    ],
  })
);
