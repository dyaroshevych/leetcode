const detectCapitalUse = (word) => {
  if (word.toUpperCase() !== word) {
    for (let i = 1; i < word.length; i++) {
      if (word[i].toLowerCase() !== word[i]) {
        return false;
      }
    }
  }

  return true;
};
