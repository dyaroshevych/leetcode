class CombinationIterator {
  constructor(characters, combinationLength) {
    this.str = characters;

    // positions[indexes] of pointers in the given string, initially first {combinationLength} indexes
    this.positions = new Array(combinationLength).fill(0).map((_, idx) => idx);
    this.hasNextCombination = true;
  }

  next() {
    let str = this.positions
      .map((positionIndex) => this.str[positionIndex])
      .join("");

    let currIndex = this.positions.length - 1;

    // find index of the last pointer that has not reached the end yet
    while (
      currIndex >= 0 &&
      this.positions[currIndex] ===
        this.str.length - this.positions.length + currIndex
    ) {
      currIndex--;
    }

    if (currIndex === -1) {
      this.hasNextCombination = false;
    } else {
      this.positions[currIndex]++;

      for (let i = currIndex + 1; i < this.positions.length; i++) {
        this.positions[i] = this.positions[i - 1] + 1;
      }
    }

    return str;
  }

  hasNext() {
    return this.hasNextCombination;
  }
}

const iterator = new CombinationIterator("abc", 2);

console.log(iterator.next()); // returns "ab"
console.log(iterator.hasNext()); // returns true
console.log(iterator.next()); // returns "ac"
console.log(iterator.hasNext()); // returns true
console.log(iterator.next()); // returns "bc"
console.log(iterator.hasNext()); // returns false
