const champagneTower = (poured, queryRow, queryGlass) => {
  const tower = [[poured]];

  for (let row = 0; row < queryRow; row++) {
    tower.push([0]);
    for (let glass = 0; glass <= row; glass++) {
      const currPoured = (tower[row][glass] - 1) / 2;

      if (currPoured > 0) {
        tower[row + 1][glass] += currPoured;
        tower[row + 1].push(currPoured);
      } else {
        tower[row + 1].push(0);
      }
    }
  }

  return Math.min(tower[queryRow][queryGlass], 1);
};

console.log(champagneTower(2, 2, 0));
