const isValid = (num) => {
  const digits = new Set(String(num).split(""));

  if (digits.has("3") || digits.has("4") || digits.has("7")) {
    return false;
  }

  return (
    digits.has("2") || digits.has("5") || digits.has("6") || digits.has("9")
  );
};

const rotatedDigits = (N) => {
  let validNumsCount = 0;

  for (let i = 1; i <= N; i++) {
    if (isValid(i)) {
      validNumsCount++;
    }
  }

  return validNumsCount;
};

// if a number has at least one digit from [3, 4, 7] then it's invalid
// if a number doesn't have at least one digit from [2, 5, 6 ,9] then it's invalid

console.log(rotatedDigits(10));
