// INPUT: "loveleetcode"
// OUTPUT: 2

const firstUniqChar = (str) => {
  const lettersFrequency = {};

  for (let i = 0; i < str.length; i++) {
    if (lettersFrequency[str[i]]) lettersFrequency[str[i]]++;
    else lettersFrequency[str[i]] = 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (lettersFrequency[str[i]] === 1) return i;
  }

  return -1;
};

console.log(firstUniqChar("loveleetcode"));
