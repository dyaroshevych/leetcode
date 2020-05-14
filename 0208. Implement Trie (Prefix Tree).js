class Node {
  constructor() {
    this.letters = {};
    this.isEnd = false;
    this.setEnd = () => (this.isEnd = true);
  }
}

class Trie {
  constructor() {
    this.data = {};
  }

  insert(word) {
    if (!this.data[word[0]]) this.data[word[0]] = new Node();
    let currCell = this.data[word[0]];

    for (let i = 1; i < word.length; i++) {
      if (!currCell.letters[word[i]]) {
        currCell.letters[word[i]] = new Node();
      }
      currCell = currCell.letters[word[i]];
    }

    currCell.setEnd();
  }

  search(word) {
    if (!this.data[word[0]]) return false;
    let currNode = this.data[word[0]];

    for (let i = 1; i < word.length; i++) {
      currNode = currNode.letters[word[i]];
      if (!currNode) return false;
    }

    return currNode.isEnd;
  }

  startsWith(word) {
    if (!this.data[word[0]]) return false;
    let currNode = this.data[word[0]];

    for (let i = 1; i < word.length; i++) {
      currNode = currNode.letters[word[i]];
      if (!currNode) return false;
    }

    return true;
  }
}

const trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple"));
console.log(trie.search("app"));
console.log(trie.startsWith("app"));
trie.insert("app");
console.log(trie.search("app"));
