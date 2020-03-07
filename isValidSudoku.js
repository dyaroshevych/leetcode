const isValidSudoku = board => {
  const map = new Set();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];

      if (val === ".") continue;

      const rowKey = `col ${i}_${val}`;
      const colKey = `row ${j}_${val}`;
      const boxKey = `box ${Math.floor(i / 3)}_${Math.floor(j / 3)}_${val}`;

      if (map.has(rowKey) || map.has(colKey) || map.has(boxKey)) return false;

      map.add(rowKey);
      map.add(colKey);
      map.add(boxKey);
    }
  }

  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ])
);
