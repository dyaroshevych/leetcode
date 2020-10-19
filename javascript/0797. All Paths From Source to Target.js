// O(n*2^n) time | O(n*2^n) space
const getPaths = (graph, visited, currNode) => {
  if (visited.has(currNode)) {
    return [];
  }

  if (currNode === graph.length - 1) {
    return [[currNode]];
  }

  visited.add(currNode);

  let currPaths = [];

  for (let i = 0; i < graph[currNode].length; i++) {
    const nextNodePaths = getPaths(graph, visited, graph[currNode][i]);

    nextNodePaths.forEach((path) => path.push(currNode));

    currPaths.push(...nextNodePaths);
  }

  visited.delete(currNode);

  return currPaths;
};

const allPathsSourceTarget = (graph) =>
  getPaths(graph, new Set(), 0).map((reversedPath) => reversedPath.reverse());

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
