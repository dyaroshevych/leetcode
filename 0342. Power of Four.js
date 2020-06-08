const isPowerOfFour = (num) => {
  if (num <= 0 || Math.floor(Math.sqrt(num)) !== Math.sqrt(num)) return false;

  return ((Math.sqrt(num) - 1) & Math.sqrt(num)) === 0;
};

console.log(isPowerOfFour(16));
