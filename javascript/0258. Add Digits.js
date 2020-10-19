const addDigits = num => {
  if (!num) return 0;
  return num % 9 ? num % 9 : 9;
};

console.log(addDigits(38));
