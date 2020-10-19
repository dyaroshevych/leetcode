class RandomizedSet {
  constructor() {
    this.keys = new Map();
    this.values = new Map();
    this.highest = -1;
  }

  insert(val) {
    if (this.values.has(val)) return false;

    this.highest++;
    this.values.set(val, this.highest);
    this.keys.set(this.highest, val);

    return true;
  }

  remove(val) {
    if (!this.values.has(val)) return false;

    const currIdx = this.values.get(val);
    this.values.set(this.keys.get(this.highest), currIdx);
    this.values.delete(val);
    this.keys.set(currIdx, this.keys.get(this.highest));
    this.keys.delete(this.highest);
    this.highest--;

    return true;
  }

  getRandom() {
    if (this.highest === -1) return null;

    return this.keys.get(Math.floor(Math.random() * (this.highest + 1)));
  }
}

const randomizedSet = new RandomizedSet();

randomizedSet.insert(1);
randomizedSet.insert(2);
randomizedSet.insert(3);
randomizedSet.insert(4);

randomizedSet.remove(3);

console.log(randomizedSet.getRandom());
console.log(randomizedSet.getRandom());
console.log(randomizedSet.getRandom());
console.log(randomizedSet.getRandom());
console.log(randomizedSet.getRandom());
