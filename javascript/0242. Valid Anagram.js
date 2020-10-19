// INPUT: "anagram", "nagaram"
// OUTPUT: true

const isAnagramLinearSpace = (str1, str2) => {
  const getChars = str => {
    const chars = {};

    for (let i = 0; i < str.length; i++) {
      if (chars[str[i]]) {
        chars[str[i]]++;
      } else {
        chars[str[i]] = 1;
      }
    }

    return chars;
  };

  const chars1 = getChars(str1),
    chars2 = getChars(str2);

  for (let i of Object.keys(chars1)) {
    if (chars1[i] !== chars2[i]) return false;
  }

  for (let i of Object.keys(chars2)) {
    if (chars1[i] !== chars2[i]) return false;
  }

  return true;
};

const isAnagram = (str1, str2) => {
  const charsCount = new Array(26).fill(0);

  for (let i = 0; i < str1.length; i++) {
    charsCount[str1.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  for (let i = 0; i < str2.length; i++) {
    charsCount[str2.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  for (let i = 0; i < 26; i++) {
    if (charsCount[i]) return false;
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
