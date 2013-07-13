
package gpfinance.tree;

import gpfinance.datatypes.Decision;

/**
 * @date   14-July-2013
 * @author Sudheesh Singanamalla
 */
public class DecisionNode extends Node {
    public Decision decision;
    
    public DecisionNode(){
        super(null, null);
        this.decision = Decision.BUY;
    }
    
    public DecisionNode(Decision decision){
        super(null, null);
        this.decision = decision;
    }
    
    public static DecisionNode getRandom(){
        return new DecisionNode(Decision.getRandom());
    }
    
    @Override
    public boolean isLeaf(){
        return true;
    }
        
    @Override
    public String toString(){
        String tmp = decision.toString();
        int padd = 12 - tmp.length();
        for (int i = 0; i < padd; ++i)
            tmp += " ";
        return tmp;
    }
}
