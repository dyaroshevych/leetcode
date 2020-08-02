class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyHashSet {
  constructor() {
    this.size = 997;
    this.keyMap = new Array(this.size);
  }

  _hash(key) {
    return key % this.size;
  }

  add(key) {
    if (this.contains(key)) {
      return;
    }

    const newNode = new Node(key);
    const idx = this._hash(key);

    if (!this.keyMap[idx]) {
      this.keyMap[idx] = newNode;
    } else {
      newNode.next = this.keyMap[idx];
      this.keyMap[idx] = newNode;
    }
  }

  remove(key) {
    if (!this.contains(key)) {
      return;
    }

    const idx = this._hash(key);
    let currNode = this.keyMap[idx];

    if (currNode.val === key) {
      if (currNode.next) {
        this.keyMap[idx] = currNode.next;
        return;
      }

      delete this.keyMap[idx];
      return;
    }

    while (currNode.next) {
      if (currNode.next.val === key) {
        currNode.next = currNode.next.next;
        return;
      }

      currNode = currNode.next;
    }
  }

  contains(key) {
    const idx = this._hash(key);

    let currNode = this.keyMap[idx];

    while (currNode) {
      if (currNode.val === key) {
        return true;
      }

      currNode = currNode.next;
    }

    return false;
  }
}

const hashSet = new MyHashSet();

hashSet.add(4);
hashSet.add(6);
hashSet.add(5);
hashSet.add(998);
hashSet.add(1);

console.log(hashSet.contains(5)); // true
console.log(hashSet.contains(6)); // true
console.log(hashSet.contains(10)); // false
console.log(hashSet.contains(1)); // true

hashSet.remove(998);

console.log(hashSet.contains(997)); // false
console.log(hashSet.contains(998)); // false
console.log(hashSet.contains(1)); // true
console.log(hashSet.contains(999)); // false
