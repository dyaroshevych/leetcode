class Node {
  constructor() {
    this.letters = {};
    this.isEnd = false;
  }
}

class WordDictionary {
  constructor() {
    this.letters = {};
  }

  addWord(word) {
    let currLetter = this;
    for (let idx = 0; idx < word.length; idx++) {
      if (!currLetter.letters[word[idx]])
        currLetter.letters[word[idx]] = new Node();
      currLetter = currLetter.letters[word[idx]];
    }

    currLetter.isEnd = true;
  }

  search(input) {
    const searchFromIdx = (currLetter, startIdx) => {
      if (startIdx === input.length - 1) {
        if (input[startIdx] === ".") {
          for (let key of Object.keys(currLetter.letters)) {
            if (currLetter.letters[key].isEnd) return true;
          }

          return false;
        }

        return (
          !!currLetter.letters[input[startIdx]] &&
          currLetter.letters[input[startIdx]].isEnd
        );
      }

      if (input[startIdx] === ".") {
        for (let key of Object.keys(currLetter.letters)) {
          if (searchFromIdx(currLetter.letters[key], startIdx + 1)) return true;
        }

        return false;
      } else {
        return (
          !!currLetter.letters[input[startIdx]] &&
          searchFromIdx(currLetter.letters[input[startIdx]], startIdx + 1)
        );
      }
    };

    return searchFromIdx(this, 0);
  }
}

const wordDictionary = new WordDictionary();

wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")); // false
console.log(wordDictionary.search("bad")); // true
console.log(wordDictionary.search(".ad")); // true
console.log(wordDictionary.search("b..")); // true
