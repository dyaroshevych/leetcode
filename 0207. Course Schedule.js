const isCycle = (courseIdx, edges, visited) => {
  if (visited[courseIdx] === 1) return true;

  visited[courseIdx] = 1;

  if (edges[courseIdx]) {
    for (let i = 0; i < edges[courseIdx].length; i++) {
      if (isCycle(edges[courseIdx][i], edges, visited)) return true;
    }
  }

  visited[courseIdx] = 2;

  return false;
};

const canFinish = (N, pre) => {
  const edges = {};

  for (let i = 0; i < pre.length; i++) {
    if (edges[pre[i][0]]) edges[pre[i][0]].push(pre[i][1]);
    else edges[pre[i][0]] = [pre[i][1]];
  }

  const visited = {};

  for (let i = 0; i < N; i++) {
    if (isCycle(i, edges, visited)) return false;
  }

  return true;
};

console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
);
