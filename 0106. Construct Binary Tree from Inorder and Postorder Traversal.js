// reversed inorder: right -> root -> left
// reversed postorder: root -> right -> left

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// O(n) time | O(n) space
const buildTree = (inorder, postorder) => {
  // these pointers should be accessible from each
  // level of the recursion, therefore 'global':
  // pointerInorder [initially the last index]
  // pointerPostorder [initially the last index]
  let pointerInorder = inorder.length - 1;
  let pointerPostorder = postorder.length - 1;

  const dfs = (end) => {
    // if we have reached the end, return null as a current subtree.
    if (pointerPostorder < 0) {
      return null;
    }

    // create a node with the value of postorder[pointerPostorder].
    // this node is our current root node.
    const node = new TreeNode(postorder[pointerPostorder]);

    pointerPostorder--;

    // if its value is not equal to inorder[pointerInorder] then
    // we need to traverse through the right subtree of this node.
    // we will end up traversing through every node in the right
    // subtree as a root node and in the end pointerPostorder will
    // point to the largest unvisited node in the tree if it exists.

    // otherwise the root value is equal to the local rightmost
    // value and that means there is no right subtree.
    if (node.val !== inorder[pointerInorder]) {
      node.right = dfs(node);
    }

    // we have just analyzed the current rightmost value, now
    // we need to move on to the next one
    pointerInorder--;

    pointerInorder;
    pointerPostorder;

    // end is the biggest current parent node, meaning that it is
    // a boundary for the left subtree.

    // if we have no boundaries, then there is a left subtree or
    // if we have a boundary which is not equal to the current rightmost
    // value, that means the current rightmost value is located in the current
    // left subtree and we need to traverse through it before moving on

    // otherwise we don't have a left subtree, therefore we have already
    // traversed through the current subtree so we can just return it
    if (end === null || end.val !== inorder[pointerInorder]) {
      node.left = dfs(end);
    }

    return node;
  };

  return dfs(null);
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
