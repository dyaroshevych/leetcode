const verticalTraversal = (root) => {
  const map = {};

  dfs(map, root, 0, 0);

  return Object.keys(map)
    .sort(offsetXComparator)
    .map((offsetX) =>
      map[offsetX].sort(nodeComparator).map((node) => node.val)
    );
};

const dfs = (map, node, offsetX, offsetY) => {
  if (node === null) {
    return;
  }

  if (!map[offsetX]) {
    map[offsetX] = [];
  }

  map[offsetX].push({ val: node.val, y: offsetY });

  dfs(map, node.left, offsetX - 1, offsetY + 1);
  dfs(map, node.right, offsetX + 1, offsetY + 1);
};

const offsetXComparator = (a, b) => Number(a) - Number(b);

const nodeComparator = (a, b) => {
  if (a.y === b.y) {
    return a.val - b.val;
  }

  return a.y - b.y;
};
