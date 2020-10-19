// INPUT: 6
// OUTPUT[example]: 3, 10, 4, 2, 5, 1

const rand10 = () => {
  while (true) {
    const row = rand7();
    const col = rand7();

    const pos = 7 * (row - 1) + col;

    if (pos <= 40) {
      return 10 - (pos % 10);
    }
  }
};
