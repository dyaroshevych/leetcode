// INPUT: 121
// OUTPUT: true

const isPalindrome = number => {
  if (number < 0) {
    return false;
  }

  let ans = 0;
  const numberCopy = number;
  while (number > 0) {
    const currentDigit = number % 10;
    number = Math.floor(number / 10);
    ans = ans * 10 + currentDigit;
  }

  return numberCopy === ans;
};

console.log(isPalindrome(121));
