class Graph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = new Set();
  }

  addEdge(node1, node2) {
    if (!this.adjacentList[node1]) this.addVertex(node1);
    if (!this.adjacentList[node2]) this.addVertex(node2);

    this.adjacentList[node1].add(node2);
  }
}

const findJudge = (N, trust) => {
  if (N === 1) return 1;
  const graph = new Graph();

  for (let i = 0; i < trust.length; i++) {
    graph.addEdge(...trust[i]);
  }

  let nodes = Object.keys(graph.adjacentList);
  for (let node of nodes) {
    if (graph.adjacentList[node].size === 0) {
      for (let adjacentNode of nodes) {
        if (
          adjacentNode !== node &&
          !graph.adjacentList[adjacentNode].has(Number(node))
        )
          return -1;
      }

      return node;
    }
  }

  return -1;
};

console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ])
);
