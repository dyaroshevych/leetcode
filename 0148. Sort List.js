class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new TreeNode(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currNode = this.root;

      while (true) {
        if (currNode.val > val) {
          if (currNode.left === null) {
            currNode.left = newNode;
            break;
          }
          currNode = currNode.left;
        } else {
          if (currNode.right === null) {
            currNode.right = newNode;
            break;
          }
          currNode = currNode.right;
        }
      }
    }
  }
}

const sortList = (head) => {
  const bst = new BST();
  let list = (currNode = null);

  const traverse = (node) => {
    if (node === null) return;

    traverse(node.left);
    if (list === null) {
      list = new ListNode(node.val);
      currNode = list;
    } else {
      currNode.next = new ListNode(node.val);
      currNode = currNode.next;
    }
    traverse(node.right);
  };

  while (head) {
    bst.insert(head.val);
    head = head.next;
  }

  traverse(bst.root);

  return list;
};

console.log(
  sortList({
    val: 4,
    next: { val: 2, next: { val: 1, next: { val: 3, next: null } } },
  })
);
