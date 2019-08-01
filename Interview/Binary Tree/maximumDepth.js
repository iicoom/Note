/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root == undefined) return 0;
    let left_height = maxDepth(root.left);
    let right_height = maxDepth(root.right);
    return left_height > right_height ? left_height+1 : right_height+1
};