class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const bstFromPreorderNlogN = (preorder) => {
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

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const bstFromPreorder = (preorder) => {
  let currIdx = 0;

  const constructNode = (min, max) => {
    const val = preorder[currIdx];
    if (currIdx === preorder.length || val < min || val > max) return null;

    const node = new TreeNode(val);
    currIdx++;

    node.left = constructNode(min, val);
    node.right = constructNode(val, max);

    return node;
  };

  return constructNode(-Infinity, Infinity);
};

console.log(bstFromPreorder([8, 5, 1, 7, 10, 12]));
