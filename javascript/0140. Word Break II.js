const wordBreak = (str, dictionary) => {
  let words = new SuffixTree();

  // create a suffix tree from a given dictionary
  for (let word of dictionary) {
    words.add(word);
  }

  // this object holds indexes from which we can
  // reach the end of the given string  as keys and
  // words that are used for it as values
  const wordsToFinishFromIndex = {};

  // traverse through the string from end to start
  // and put each index as a starting point for the
  // current word
  for (let i = str.length - 1; i >= 0; i--) {
    if (words.root[str[i]]) {
      let currNode = words.root[str[i]];
      let currIndex = i + 1;

      while (currIndex <= str.length && currNode) {
        if (
          currNode.end &&
          (wordsToFinishFromIndex[currIndex] || currIndex === str.length)
        ) {
          if (wordsToFinishFromIndex[i]) {
            wordsToFinishFromIndex[i].push(currNode.end);
          } else {
            wordsToFinishFromIndex[i] = [currNode.end];
          }
        }
        currNode = currNode.children[str[currIndex]];
        currIndex++;
      }
    }
  }

  return getResults(wordsToFinishFromIndex, str, 0);
};

class SuffixTree {
  constructor() {
    this.root = {};
  }

  add(word) {
    if (!this.root[word[0]]) {
      this.root[word[0]] = new SuffixTreeNode(word[0]);
    }

    let currNode = this.root[word[0]];

    for (let i = 1; i < word.length; i++) {
      if (!currNode.children[word[i]]) {
        currNode.children[word[i]] = new SuffixTreeNode(word[i]);
      }

      currNode = currNode.children[word[i]];
    }

    currNode.end = word;
  }
}

class SuffixTreeNode {
  constructor(val) {
    this.val = val;
    this.children = {};
    this.end = null;
  }
}

const getResults = (wordsToFinishFromIndex, string, currIndex) => {
  if (currIndex === string.length || !wordsToFinishFromIndex[currIndex]) {
    return [];
  }

  let results = [];

  for (let word of wordsToFinishFromIndex[currIndex]) {
    if (currIndex + word.length === string.length) {
      results.push(word);
    } else {
      getResults(
        wordsToFinishFromIndex,
        string,
        currIndex + word.length
      ).forEach((nextResult) => {
        results.push(`${word} ${nextResult}`);
      });
    }
  }

  return results;
};

console.log(
  wordBreak("pineapplepenapple", [
    "apple",
    "pen",
    "applepen",
    "pine",
    "pineapple",
  ])
);
