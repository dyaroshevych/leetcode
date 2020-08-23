const maxCoins = (piles) => {
  piles.sort((a, b) => a - b);

  const N = piles.length / 3;

  let sum = 0;

  for (let i = piles.length - 2; i >= N; i -= 2) {
    sum += piles[i];
  }

  return sum;
};

console.log(maxCoins([2, 4, 1, 2, 7, 8]));
