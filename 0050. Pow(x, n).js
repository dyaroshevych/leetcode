const myPow = (x, n) => {
  if (n === 0) return 1;
  if (n === 1) return x;

  if (n < 0) {
    n = -n;
    x = 1 / x;
  }

  return n % 2 === 0
    ? myPow(x * x, Math.floor(n / 2))
    : x * myPow(x * x, Math.floor(n / 2));
};

console.log(myPow(2, 10));
