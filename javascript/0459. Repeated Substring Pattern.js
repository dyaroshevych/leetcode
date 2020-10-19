const repeatedSubstringPattern = (str) => {
  const strstr = str.slice(1) + str.slice(0, str.length - 1);

  return strstr.indexOf(str) !== -1;
};

console.log(repeatedSubstringPattern("abab"));
