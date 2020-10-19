const isPredecessor = (word1, word2) => {
  let index1 = 0;
  let index2 = 0;

  let canAddLetter = true;

  while (index2 < word2.length) {
    if (word1[index1] !== word2[index2]) {
      if (canAddLetter) {
        index2--;
        canAddLetter = false;
      } else {
        return false;
      }
    }

    index1++;
    index2++;
  }

  return true;
};

const longestStrChain = (words) => {
  words.sort((a, b) => a.length - b.length);

  const lengths = new Array(words.length).fill(1);

  let index = 1;

  while (index < words.length && words[index].length === words[0].length) {
    index++;
  }

  for (let i = index; i < words.length; i++) {
    let j = i - 1;

    while (words[j].length === words[i].length) {
      j--;
    }

    while (j >= 0 && words[j].length === words[i].length - 1) {
      if (isPredecessor(words[i], words[j])) {
        lengths[i] = Math.max(lengths[i], lengths[j] + 1);
      }

      j--;
    }
  }

  return Math.max(...lengths);
};

console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]));
