const findTheDifference = (str1, str2) => {
  const charsCount = {};

  for (let i = 0; i < str2.length; i++) {
    if (charsCount[str1[i]]) {
      charsCount[str1[i]]--;
    } else {
      charsCount[str1[i]] = -1;
    }

    if (charsCount[str2[i]]) {
      charsCount[str2[i]]++;
    } else {
      charsCount[str2[i]] = 1;
    }
  }

  for (let [char, count] of Object.entries(charsCount)) {
    if (count > 0) {
      return char;
    }
  }
};

console.log(findTheDifference("abcd", "abcde"));
