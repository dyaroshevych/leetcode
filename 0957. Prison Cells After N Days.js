const nextDay = (cells) => {
  const nextCells = [...cells];
  nextCells[0] = 0;
  nextCells[nextCells.length - 1] = 0;

  for (let i = 1; i < cells.length - 1; i++) {
    nextCells[i] = cells[i - 1] === cells[i + 1] ? 1 : 0;
  }

  return nextCells;
};

const prisonAfterNDays = (cells, N) => {
  if (cells.length === 0 || N <= 0) return cells;

  let hasCycle = false,
    cycleIdx = 0;
  const set = new Set();

  while (cycleIdx < N) {
    const next = nextDay(cells);
    const key = next.join("");

    if (set.has(key)) {
      hasCycle = true;
      break;
    }

    cells = next;
    set.add(key);
    cycleIdx++;
  }

  if (hasCycle) {
    N %= cycleIdx;

    for (let i = 0; i < N; i++) {
      cells = nextDay(cells);
    }
  }

  return cells;
};

console.log(prisonAfterNDays([0, 1, 0, 1, 1, 0, 0, 1], 7));
