
package gpfinance.datatypes;

import java.util.Random;

/**
 * @date   14-July-2013
 * @author Sudheesh Singanamalla
 */
public enum Decision {
    BUY(0, "Buy"),
    SELL(1, "Short");
    
    private int code;
    private String label;
    
    private Decision(int code, String label){
        this.code = code;
        this.label = label;
    }

    public int getCode() {
        return code;
    }
    
    public String getLabel() {
        return label;
    }
    
    public static Decision getRandom(){
        return Decision.values()[Math.random() > 0.5 ? 0 : 1];
    }
}
