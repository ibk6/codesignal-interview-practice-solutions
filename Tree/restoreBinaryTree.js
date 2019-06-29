//
// Definition for binary tree:
function Tree(x) {
    this.value = x;
    this.left = null;
    this.right = null;
}

function findInorder(inorder, left, right, value) {
    for (var i = left; i <= right; i++) {
        if (value === inorder[i])
            return i;
    }
}

var preorderIndex = 0;

function restoreBinaryTree(inorder, preorder, left, right) {
    left = left === undefined ? 0 : left;
    right = right === undefined ? inorder.length - 1 : right;

    if (left > right)
        return null;

    var t = new Tree(preorder[preorderIndex++]);
    var inorderIndex = findInorder(inorder, left, right, t.value);
    t.left = restoreBinaryTree(inorder, preorder, left, inorderIndex - 1);
    t.right = restoreBinaryTree(inorder, preorder, inorderIndex + 1, right);
    return t;
}
