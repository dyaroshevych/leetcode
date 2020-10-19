class Node {
  constructor(key, val, prev = null, next = null) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = {};
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(key) {
    if (this.items[key] === undefined) return -1;
    if (this.items[key] === this.head) return this.items[key].val;

    if (this.items[key] === this.tail && this.length > 1)
      this.tail = this.tail.next;

    if (this.items[key].prev) this.items[key].prev.next = this.items[key].next;
    if (this.items[key].next) {
      this.items[key].next.prev = this.items[key].prev;
      this.items[key].next = null;
    }

    this.items[key].prev = this.head;
    if (this.head) this.head.next = this.items[key];
    else {
      this.tail = this.items[key];
    }

    this.head = this.items[key];

    return this.items[key].val;
  }

  put(key, val) {
    if (this.items[key] !== undefined) {
      this.items[key].val = val;
      this.get(key);
      return;
    }

    if (this.length < this.capacity) {
      this.items[key] = new Node(key, val, this.head);
      if (this.length === 0) {
        this.tail = this.items[key];
      } else {
        this.head.next = this.items[key];
      }
      this.head = this.items[key];
      this.length++;
    } else {
      if (this.tail.next) this.tail.next.prev = null;
      const newTail = this.tail.next;
      delete this.items[this.tail.key];
      this.tail = newTail;
      if (this.length === 1) this.head = null;
      this.length--;
      this.put(key, val);
    }
  }
}

const lruCache = new LRUCache(2);

lruCache.put(2, 1);
lruCache.put(3, 2);
console.log(lruCache.get(3));
console.log(lruCache.get(2));
lruCache.put(4, 3);
console.log(lruCache.get(2));
console.log(lruCache.get(3));
console.log(lruCache.get(4));
