class Node {
  constructor(char, frequency) {
    this.char = char;
    this.frequency = frequency;
  }
}

class MaxHeap {
  constructor() {
    this.array = [Infinity];
  }

  insert(node) {
    this.array.push(node);

    let currIdx = this.array.length - 1;
    while (
      this.array[currIdx].frequency >
      this.array[Math.floor(currIdx / 2)].frequency
    ) {
      [this.array[currIdx], this.array[Math.floor(currIdx / 2)]] = [
        this.array[Math.floor(currIdx / 2)],
        this.array[currIdx],
      ];

      currIdx = Math.floor(currIdx / 2);
    }
  }

  popMax() {
    if (this.array.length === 1) return null;

    const node = this.array[1];
    this.array[1] = this.array[this.array.length - 1];
    this.array.pop();

    let currIdx = 1;
    while (currIdx * 2 < this.array.length) {
      let childrenMaxIdx = currIdx * 2;

      if (
        currIdx * 2 + 1 < this.array.length &&
        this.array[currIdx * 2].frequency <
          this.array[currIdx * 2 + 1].frequency
      ) {
        childrenMaxIdx = currIdx * 2 + 1;
      }

      if (
        this.array[currIdx].frequency < this.array[childrenMaxIdx].frequency
      ) {
        [this.array[currIdx], this.array[childrenMaxIdx]] = [
          this.array[childrenMaxIdx],
          this.array[currIdx],
        ];
        currIdx = childrenMaxIdx;
      } else break;
    }

    return node;
  }
}

const frequencySort = (str) => {
  const lettersFrequency = {};

  for (let i = 0; i < str.length; i++) {
    if (lettersFrequency[str[i]]) lettersFrequency[str[i]]++;
    else lettersFrequency[str[i]] = 1;
  }

  const lettersHeap = new MaxHeap();

  for (let char of Object.keys(lettersFrequency)) {
    lettersHeap.insert(new Node(char, lettersFrequency[char]));
  }

  let result = "";

  while (true) {
    const currMax = lettersHeap.popMax();

    if (currMax === null) return result;

    result += new Array(currMax.frequency).fill(currMax.char).join("");
  }
};

console.log(frequencySort("loveleetcode"));
