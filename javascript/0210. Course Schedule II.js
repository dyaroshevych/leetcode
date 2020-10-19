const hasCycle = (idx, edges, order, visited) => {
  if (visited[idx] === 1) {
    return true;
  }

  if (visited[idx] === 2) {
    return false;
  }

  if (edges[idx]) {
    visited[idx] = 1;

    for (let edge of edges[idx]) {
      if (hasCycle(edge, edges, order, visited)) return true;
    }
  }

  order.push(idx);
  visited[idx] = 2;

  return false;
};

const findOrder = (numCourses, prerequisites) => {
  const edges = {};

  for (let [a, b] of prerequisites) {
    if (edges[a]) {
      edges[a].push(b);
    } else {
      edges[a] = [b];
    }
  }

  const visited = {};
  const order = [];

  for (let i = 0; i < numCourses; i++) {
    if (visited[i] !== 2) {
      if (hasCycle(i, edges, order, visited)) return [];
    }
  }

  return order;
};

console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
);
