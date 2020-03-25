class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return -1;
    }

    let node = this.head,
      currIndex = 0;

    while (currIndex < index) {
      node = node.next;
      currIndex++;
    }

    return node.val;
  }

  addAtHead(val) {
    const node = new Node(val, this.head);
    this.head = node;
    if (this.length === 0) {
      this.tail = this.head;
    }
    this.length++;
  }

  addAtTail(val) {
    if (this.length === 0) {
      this.addAtHead(val);
      return;
    }
    const node = new Node(val);
    this.tail.next = node;
    this.tail = this.tail.next;
    this.length++;
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.length) {
      return;
    }
    if (index === 0) {
      this.addAtHead(val);
      return;
    }
    if (index === this.length) {
      this.addAtTail(val);
      return;
    }

    let node = this.head,
      currIndex = 1;

    while (currIndex < index) {
      node = node.next;
      currIndex++;
    }
    node.next = new Node(val, node.next);
    this.length++;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.length) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = this.head;
      }
      this.length--;
      return;
    }

    let node = this.head,
      currIndex = 1;
    while (currIndex < index) {
      node = node.next;
      currIndex++;
    }
    node.next = node.next.next;
    if (index === this.length - 1) {
      this.tail = node;
    }
    this.length--;
  }
}

const list = new MyLinkedList();

list.addAtHead(1);
list.addAtTail(3);
list.addAtIndex(1, 2);
console.log(list.get(1));
