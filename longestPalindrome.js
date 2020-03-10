// INPUT: "abbad"
// OUTPUT: "abba"

const longestPalindrome = str => {
  let maxLength = 0,
    maxStr = "";
  for (let i = 0; i < str.length; i++) {
    let pointerOdd = 1,
      pointerEven = 0;
    while (
      str[i - pointerOdd] === str[i + pointerOdd] &&
      str[i - pointerOdd] &&
      str[i + pointerOdd]
    ) {
      pointerOdd++;
    }
    while (
      str[i - pointerEven] === str[i + pointerEven + 1] &&
      str[i - pointerEven] &&
      str[i + pointerEven + 1]
    ) {
      pointerEven++;
    }
    let currentLengthOdd = 2 * pointerOdd - 1;
    let currentLengthEven = 2 * pointerEven;
    if (maxLength < currentLengthOdd) {
      maxLength = currentLengthOdd;
      maxStr = str.slice(i - pointerOdd + 1, i + pointerOdd);
    }
    if (maxLength < currentLengthEven) {
      maxLength = currentLengthEven;
      maxStr = str.slice(i - pointerEven + 1, i + pointerEven + 1);
    }
  }

  return maxStr;
};

console.log(longestPalindrome("abbad"));
