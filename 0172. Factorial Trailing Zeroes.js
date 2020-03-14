const trailingZeroes = n => {
  let count = 0;

  while (n > 0) {
    n = Math.floor(n / 5);
    count += n;
  }

  return count;
};

console.log(trailingZeroes(24));
