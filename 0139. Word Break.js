// S - length of the given string
// L - length of the longest string in the dictionary
// C - number of chars in the dictionary
// O(C + S*L) time | O(C + S) space
const wordBreak = (str, dictionary) => {
  let words = new SuffixTree();

  // create a suffix tree from a given dictionary
  for (let word of dictionary) {
    words.add(word);
  }

  // this set holds indexes from which we can
  // reach the end of the given string with
  // the words from our dictionary
  const canFinishFromIndex = new Set([str.length]);

  // traverse through the string from end to start
  // and put each index as a starting point for the
  // current word
  for (let i = str.length - 1; i >= 0; i--) {
    if (words.root[str[i]]) {
      let currNode = words.root[str[i]];
      let currIndex = i + 1;

      while (currIndex <= str.length && currNode) {
        if (currNode.isEnd && canFinishFromIndex.has(currIndex)) {
          canFinishFromIndex.add(i);
          break;
        }
        currNode = currNode.children[str[currIndex]];
        currIndex++;
      }
    }
  }

  return canFinishFromIndex.has(0);
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

    currNode.isEnd = true;
  }
}

class SuffixTreeNode {
  constructor(val) {
    this.val = val;
    this.children = {};
    this.isEnd = false;
  }
}

console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
