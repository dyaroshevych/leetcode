const isPowerOfTwo = n => {
  if (n <= 0) return false;
  while (n > 1) {
    if (n % 2) return false;
    n /= 2;
  }

  return true;
};

console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(48));
