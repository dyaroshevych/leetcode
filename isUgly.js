// while divisible by 2, divide by 2
// while divisible by 3, divide by 3
// while divisible by 5, divide by 5
// if greater than 1, not an ugly number. if not, it's an ugly number
const isUgly = num => {
  if (num <= 0) return false;
  while (!(num % 2)) {
    num /= 2;
  }
  while (!(num % 3)) {
    num /= 3;
  }
  while (!(num % 5)) {
    num /= 5;
  }

  return num === 1;
};

console.log(isUgly(1));
