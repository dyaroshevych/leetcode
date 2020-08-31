const frogPosition = (N, edges, numSteps, target) => {
  if (target > N) {
    return 0;
  }

  target--;

  // create a graph
  const graph = new Graph(N);

  for (let [idx1, idx2] of edges) {
    graph.addEdge(idx1 - 1, idx2 - 1);
  }

  return helper(graph, numSteps, target, 0, -1, 0, 1);
};

const helper = (
  graph,
  numSteps,
  target,
  currDepth,
  prevIdx,
  currIdx,
  currProbability
) => {
  if (currDepth > numSteps) {
    return 0;
  }

  // found target node
  if (currIdx === target) {
    // took exactly "numSteps" steps => return probability
    if (numSteps === currDepth) {
      return currProbability;
    }

    let hasNextNode = false;

    for (let nextIdx of graph.getEdges(currIdx)) {
      if (nextIdx !== prevIdx) {
        hasNextNode = true;
        break;
      }
    }

    // is have a node to jump to, probability === 0
    // othervise, return probability
    return hasNextNode ? 0 : currProbability;
  }

  // nodes that we can jump to on our next step
  const nextIndices = graph.getEdges(currIdx);
  const nextProbability =
    currIdx === 0
      ? currProbability / nextIndices.length
      : currProbability / (nextIndices.length - 1);

  for (let nextIdx of nextIndices) {
    if (nextIdx !== prevIdx) {
      const probability = helper(
        graph,
        numSteps,
        target,
        currDepth + 1,
        currIdx,
        nextIdx,
        nextProbability
      );

      if (probability > 0) {
        return probability;
      }
    }
  }

  return 0;
};

class Graph {
  constructor(N) {
    this.nodes = new Array(N);

    for (let i = 0; i < N; i++) {
      this.nodes[i] = [];
    }
  }

  addEdge(idx1, idx2) {
    this.nodes[idx1].push(idx2);
    this.nodes[idx2].push(idx1);
  }

  getEdges(idx) {
    return this.nodes[idx];
  }
}

console.log(
  frogPosition(
    7,
    [
      [1, 2],
      [1, 3],
      [1, 7],
      [2, 4],
      [2, 6],
      [3, 5],
    ],
    2,
    4
  )
);
