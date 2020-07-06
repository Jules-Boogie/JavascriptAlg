
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
     }

var isValidBST = function(root,min,max) {
    if(!root){
        return true
    }
    
     if(min !== null && min >= root.val){
        return false
    }
    
     if(max !== null && max <= root.val){
        return false
    }
        
    const leftNode = isValidBST(root.left,min,root.val)
    const rightNode = isValidBST(root.right,root.val,max)
    
    if(root.left && !leftNode){
        return false
    }
    
     if(root.right && !rightNode){
        return false
    }
    
     return true
};