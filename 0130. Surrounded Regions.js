const solve = (board) => {
  if (board.length === 0) return board;

  const markRegion = (i, j) => {
    if (i < 0 || i === board.length || j < 0 || j === board[0].length) return;

    if (board[i][j] === "O") {
      board[i][j] = "*";
      markRegion(i - 1, j);
      markRegion(i, j - 1);
      markRegion(i + 1, j);
      markRegion(i, j + 1);
    }
  };

  for (let i = 0; i < board.length; i++) {
    if (board[i][0] === "O") markRegion(i, 0);
    if (board[i][board[0].length - 1] === "O")
      markRegion(i, board[0].length - 1);
  }

  for (let j = 1; j < board[0].length - 1; j++) {
    if (board[0][j] === "O") markRegion(0, j);
    if (board[board.length - 1][j] === "O") markRegion(board.length - 1, j);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "O") {
        board[i][j] = "X";
      } else if (board[i][j] === "*") board[i][j] = "O";
    }
  }

  return board;
};

console.log(
  solve([
    ["X", "O", "X", "O", "X", "O"],
    ["O", "X", "O", "X", "O", "X"],
    ["X", "O", "X", "O", "X", "O"],
    ["O", "X", "O", "X", "O", "X"],
  ])
);
