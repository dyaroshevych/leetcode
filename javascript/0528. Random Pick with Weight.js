class Solution {
  constructor(weights) {
    this.sum = 0;
    this.weights = new Map();

    for (let i = 0; i < weights.length; i++) {
      this.sum += weights[i];
      this.weights.set(this.sum, i);
    }
  }

  pickIndex() {
    const idx = Math.floor(Math.random() * this.sum);

    for (let key of this.weights.keys()) {
      if (key > idx) return this.weights.get(key);
    }
  }
}

const solution = new Solution([1, 3]);

console.log(solution.pickIndex());
console.log(solution.pickIndex());
console.log(solution.pickIndex());
console.log(solution.pickIndex());
console.log(solution.pickIndex());
