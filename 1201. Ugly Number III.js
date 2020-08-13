const gcd = (a, b) => {
  if (a === 0) {
    return b;
  }

  return gcd(b % a, a);
};

const lcm = (a, b) => (a * b) / gcd(a, b);

const hasAtLeastNUglyNumbersBelow = (N, a, b, c, LCMs, num) =>
  N <=
  Math.floor(num / a) +
    Math.floor(num / b) +
    Math.floor(num / c) -
    Math.floor(num / LCMs[0]) -
    Math.floor(num / LCMs[1]) -
    Math.floor(num / LCMs[2]) +
    Math.floor(num / LCMs[3]);

const nthUglyNumber = (N, a, b, c) => {
  const LCMs = [lcm(a, b), lcm(a, c), lcm(b, c)];

  LCMs.push(lcm(LCMs[0], c));

  let left = 1;
  let right = 2 * 10 ** 9;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (hasAtLeastNUglyNumbersBelow(N, a, b, c, LCMs, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(nthUglyNumber(4, 2, 3, 4));
