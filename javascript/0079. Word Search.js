const exist = (board, word) => {
  const existsWithStart = (currIdx, i, j) => {
    if (currIdx === word.length) {
      return true;
    }

    if (
      i < 0 ||
      j < 0 ||
      i >= board.length ||
      j >= board[0].length ||
      visited.has(`${i}_${j}`) ||
      word[currIdx] !== board[i][j]
    ) {
      return false;
    }

    visited.add(`${i}_${j}`);

    const exists =
      existsWithStart(currIdx + 1, i - 1, j) ||
      existsWithStart(currIdx + 1, i, j - 1) ||
      existsWithStart(currIdx + 1, i + 1, j) ||
      existsWithStart(currIdx + 1, i, j + 1);

    visited.delete(`${i}_${j}`);

    return exists;
  };

  const visited = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (existsWithStart(0, i, j)) {
        return true;
      }
    }
  }

  return false;
};

console.log(
  exist(
    [
      ["a", "b"],
      ["c", "d"],
    ],
    "acdb"
  )
);
