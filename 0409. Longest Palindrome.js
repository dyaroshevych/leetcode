const longestPalindrome = (str) => {
  const lettersCount = {};

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (!lettersCount[str[i]]) {
      lettersCount[str[i]] = 0;
    }

    lettersCount[str[i]]++;
  }

  let hasOddLetterCount = false;

  for (let currLetterCount of Object.values(lettersCount)) {
    count += currLetterCount - (currLetterCount % 2);

    if (currLetterCount % 2) {
      hasOddLetterCount = true;
    }
  }

  if (hasOddLetterCount) {
    count++;
  }

  return count;
};

console.log(longestPalindrome("abccccdd"));
