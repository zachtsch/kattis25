type Tree = null | {left:Tree,val:number,right:Tree}

//recursive
function invertTree(root: Tree): Tree{
    if(root == null) return null;
    [root.left,root.right] = [invertTree(root.right),invertTree(root.left)]
    // invertTree(root.left)
    // invertTree(root.right)
    return root;
};