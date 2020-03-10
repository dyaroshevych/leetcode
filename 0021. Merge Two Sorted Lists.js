class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    if (this.head) {
      this.tail.next = new Node(val, null);
      this.tail = this.tail.next;
    } else {
      this.head = new Node(val, null);
      this.tail = this.head;
    }
  }
}

const mergeTwoLists = (list1, list2) => {
  const list = new List();
  let pointer1 = list1,
    pointer2 = list2;

  while (pointer1 && pointer2) {
    if (pointer1.val < pointer2.val) {
      list.push(pointer1.val);
      pointer1 = pointer1.next;
    } else {
      list.push(pointer2.val);
      pointer2 = pointer2.next;
    }
  }

  while (pointer1) {
    list.push(pointer1.val);
    pointer1 = pointer1.next;
  }

  while (pointer2) {
    list.push(pointer2.val);
    pointer2 = pointer2.next;
  }

  return list.head;
};

console.log(
  mergeTwoLists(
    {
      val: 1,
      next: { val: 2, next: { val: 4, next: null } }
    },
    {
      val: 1,
      next: { val: 3, next: { val: 4, next: null } }
    }
  )
);
