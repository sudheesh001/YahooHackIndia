
package gpfinance.tree;

/**
 * @date   14-July-2013
 * @author Sudheesh Singanamalla
 */
public class Node {
    public Node left;
    public Node right;
    
    public Node() { }

    public Node(Node left, Node right) {
        this.left = left;
        this.right = right;
    }
    
    public boolean isLeaf(){ return false; }
    
    public void printChain(){
        print("", true);
    }

    private void print(String prefix, boolean isTail) {
        System.out.println(prefix + (isTail ? "└── " : "├── ") + this.toString());
        if (left != null)
            left.print(prefix + (isTail ? "    " : "│   "), left == null);
        if (right != null)
            right.print(prefix + (isTail ? "    " : "│   "), right == null);
    }
}
