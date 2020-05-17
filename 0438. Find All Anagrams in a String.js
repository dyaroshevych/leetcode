const findAnagrams = (str, input) => {
  const isAnagram = (charsMap) => {
    for (let charCount of Object.values(charsMap)) if (charCount) return false;
    return true;
  };

  const currLetters = {};

  for (let i = 0; i < input.length; i++) {
    if (currLetters[str[i]]) currLetters[str[i]]++;
    else currLetters[str[i]] = 1;
    if (currLetters[input[i]]) currLetters[input[i]]--;
    else currLetters[input[i]] = -1;
  }

  const anagrams = [];
  let startIdx = 0;
  while (startIdx + input.length <= str.length) {
    if (isAnagram(currLetters)) anagrams.push(startIdx);

    currLetters[str[startIdx]]--;

    if (currLetters[str[startIdx + input.length]])
      currLetters[str[startIdx + input.length]]++;
    else currLetters[str[startIdx + input.length]] = 1;

    startIdx++;
  }

  return anagrams;
};

console.log(findAnagrams("cbaebabacd", "abc"));
