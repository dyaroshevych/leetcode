const wordPattern = (pattern, str) => {
  const words = str.split(" ");

  if (words.length !== pattern.length) {
    return false;
  }

  const matchingLetters = {};
  const matchingWords = {};

  for (let i = 0; i < words.length; i++) {
    if (!matchingLetters[words[i]] && !matchingWords[pattern[i]]) {
      matchingLetters[words[i]] = pattern[i];
      matchingWords[pattern[i]] = words[i];
      continue;
    }

    if (
      matchingLetters[words[i]] !== pattern[i] ||
      matchingWords[pattern[i]] !== words[i]
    ) {
      return false;
    }
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
