// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
var maxDepth = function(root) {
    
    //DFS and recursion
    if(!root){
        return 0
    }
    const leftMaxDepth = maxDepth(root.left)
    const rightMaxDepth = maxDepth(root.right)
    return Math.max(leftMaxDepth, rightMaxDepth) + 1
};