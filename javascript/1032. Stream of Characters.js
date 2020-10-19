class StreamChecker {
  // N - number of words
  // L - length of the longest word

  // O(N*L) time | O(N*L) space
  constructor(words) {
    this.words = new SuffixTree(words);
    this.pointers = [];
  }

  // O(L) time | O(L) space
  query(letter) {
    const newPointers = [];

    let hasWord = false;

    for (let pointer of this.pointers) {
      const currNode = pointer.children[letter];

      if (currNode) {
        newPointers.push(currNode);

        if (currNode.isEnd) {
          hasWord = true;
        }
      }
    }

    if (this.words.hasFirstLetter(letter)) {
      newPointers.push(this.words.root[letter]);

      if (this.words.root[letter].isEnd) {
        hasWord = true;
      }
    }

    this.pointers = newPointers;

    return hasWord;
  }
}

class SuffixTreeNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class SuffixTree {
  constructor(words) {
    this.root = {};

    for (let word of words) {
      this.add(word);
    }
  }

  add(word) {
    if (!this.hasFirstLetter(word[0])) {
      this.root[word[0]] = new SuffixTreeNode();
    }

    let currNode = this.root[word[0]];

    for (let i = 1; i < word.length; i++) {
      if (!currNode.children[word[i]]) {
        currNode.children[word[i]] = new SuffixTreeNode();
      }

      currNode = currNode.children[word[i]];
    }

    currNode.isEnd = true;
  }

  hasFirstLetter(letter) {
    return !!this.root[letter];
  }
}

const stream = new StreamChecker([
  "bad",
  "add",
  "diet",
  "additional",
  "tea",
  "eat",
]);

console.log(stream.query("a")); // false
console.log(stream.query("d")); // false
console.log(stream.query("d")); // true
console.log(stream.query("i")); // false
console.log(stream.query("e")); // false
console.log(stream.query("t")); // true
console.log(stream.query("i")); // false
console.log(stream.query("o")); // false
console.log(stream.query("n")); // false
console.log(stream.query("a")); // false
console.log(stream.query("l")); // false
