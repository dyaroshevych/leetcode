// INPUT: "re2aceca2er"
// OUTPUT: true

const isPalindrome = str => {
  let start = 0,
    end = str.length - 1;

  let alphabet = /\w/;

  while (start < end) {
    while (start < end && !alphabet.test(str[start])) {
      start++;
    }

    while (start < end && !alphabet.test(str[end])) {
      end--;
    }

    if (str[start++].toLowerCase() !== str[end--].toLowerCase()) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome("re2aceca2er"));
