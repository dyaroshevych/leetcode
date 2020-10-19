const possibleBipartition = (N, dislikes) => {
  const connections = new Array(N + 1);

  for (let i = 0; i <= N; i++) connections[i] = [];

  for (let i = 0; i < dislikes.length; i++) {
    connections[dislikes[i][0]].push(dislikes[i][1]);
    connections[dislikes[i][1]].push(dislikes[i][0]);
  }

  const teams = {};
  const isValidPartition = (node, color) => {
    if (teams[node]) return teams[node] === color;

    teams[node] = color;

    for (let i = 0; i < connections[node].length; i++) {
      if (!isValidPartition(connections[node][i], -color)) return false;
    }

    return true;
  };

  for (let i = 1; i <= N; i++) {
    if (!teams[i] && !isValidPartition(i, 1)) return false;
  }

  return true;
};

console.log(
  possibleBipartition(4, [
    [1, 2],
    [1, 3],
    [2, 4],
  ])
);
