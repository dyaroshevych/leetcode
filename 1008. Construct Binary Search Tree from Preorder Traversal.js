class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const bstFromPreorder = (preorder) => {
  if (preorder.length === 0) return null;
  const root = new Node(preorder[0]);
  const nodes = [root];

  for (let i = 1; i < preorder.length; i++) {
    const newNode = new Node(preorder[i]);
    let currNode = root;
    while (true) {
      if (preorder[i] < currNode.val) {
        if (currNode.left) {
          currNode = currNode.left;
        } else {
          currNode.left = newNode;
          break;
        }
      } else {
        if (currNode.right) {
          currNode = currNode.right;
        } else {
          currNode.right = newNode;
          break;
        }
      }
    }
  }

  return root;
};

console.log(bstFromPreorder([8, 5, 1, 7, 10, 12]));
