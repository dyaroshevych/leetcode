class MinHeap {
  constructor() {
    this.values = [Infinity];
  }

  insert(val) {
    this.values.push(val);

    let currIdx = this.values.length - 1;
    while (currIdx > 1) {
      let parentIdx = Math.floor(currIdx / 2);

      if (this.values[currIdx] < this.values[parentIdx]) {
        [this.values[currIdx], this.values[parentIdx]] = [
          this.values[parentIdx],
          this.values[currIdx],
        ];
        currIdx = parentIdx;
      } else break;
    }
  }

  popMin() {
    const val = this.values[1];
    this.values[1] = this.values[this.values.length - 1];
    this.values.pop();

    let currIdx = 1;

    while (currIdx < this.values.length / 2) {
      let minChildIdx = currIdx * 2;

      if (currIdx * 2 + 1 < this.values.length) {
        minChildIdx =
          this.values[currIdx * 2] < this.values[currIdx * 2 + 1]
            ? currIdx * 2
            : currIdx * 2 + 1;
      }

      if (this.values[currIdx] > this.values[minChildIdx]) {
        [this.values[currIdx], this.values[minChildIdx]] = [
          this.values[minChildIdx],
          this.values[currIdx],
        ];
        currIdx = minChildIdx;
      } else break;
    }

    return val;
  }
}

const mergeKListsMinHeap = (lists) => {
  if (lists.length === 0) return null;

  const listNodes = new MinHeap();

  for (let list of lists) {
    while (list) {
      listNodes.insert(list.val);
      list = list.next;
    }
  }

  if (listNodes.values.length === 1) return null;
  const resultList = new Node(listNodes.popMin());

  let currNode = resultList;
  while (listNodes.values.length > 1) {
    currNode.next = new Node(listNodes.popMin());
    currNode = currNode.next;
  }

  return resultList;
};

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const merge2Lists = (list1, list2) => {
  if (list2 === null) return;
  if (list1 === null) return true;
  if (list1.val > list2.val) {
    merge2Lists(list2, list1);
    return true;
  }

  let currNode = list1;

  while (list2 && currNode.next) {
    if (currNode.next.val <= list2.val) currNode = currNode.next;
    else {
      currNode.next = new Node(list2.val, currNode.next);
      currNode = currNode.next;
      list2 = list2.next;
    }
  }

  if (list2) currNode.next = list2;
};

const mergeKLists = (lists) => {
  if (lists.length === 0) return null;

  let interval = 1;

  while (interval < lists.length) {
    for (let i = 0; i < lists.length - interval; i += 2 * interval) {
      if (merge2Lists(lists[i], lists[i + interval])) {
        lists[i] = lists[i + interval];
      }
    }
    interval *= 2;
  }

  return lists[0];
};

console.log(
  mergeKLists([
    { val: 1, next: { val: 4, next: { val: 5, next: null } } },
    { val: 1, next: { val: 3, next: { val: 4, next: null } } },
    { val: 2, next: { val: 6, next: null } },
  ])
);

console.log(
  mergeKLists([
    { val: 0, next: null },
    { val: 1, next: null },
  ])
);
