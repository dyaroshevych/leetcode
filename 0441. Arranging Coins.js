const arrangeCoins = (n) => {
  const max = Math.floor(Math.sqrt(n * 2));

  if (max * (max + 1) > n * 2) return max - 1;
  return max;
};

console.log(arrangeCoins(8));
