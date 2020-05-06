const gameOfLife = (board) => {
  if (board.length === 0) return [];

  const countNeighbours = (i, j) => {
    let count = 1;
    if (i > 0) {
      if (board[i - 1][j] > 0) count++;
      if (j > 0 && board[i - 1][j - 1] > 0) count++;
      if (j < board[0].length - 1 && board[i - 1][j + 1] > 0) count++;
    }
    if (i < board.length - 1) {
      if (board[i + 1][j] > 0) count++;
      if (j > 0 && board[i + 1][j - 1] > 0) count++;
      if (j < board[0].length - 1 && board[i + 1][j + 1] > 0) count++;
    }
    if (j > 0 && board[i][j - 1] > 0) count++;
    if (j < board[0].length - 1 && board[i][j + 1] > 0) count++;

    return board[i][j] === 0 ? -count : count;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] = countNeighbours(i, j);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] < 0) {
        if (board[i][j] === -4) board[i][j] = 1;
        else board[i][j] = 0;
      } else {
        if (board[i][j] === 3 || board[i][j] === 4) board[i][j] = 1;
        else board[i][j] = 0;
      }
    }
  }

  return board;
};

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
);
