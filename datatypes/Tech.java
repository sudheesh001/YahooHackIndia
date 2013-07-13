
package gpfinance.datatypes;

import java.util.Random;

/**
 * @date   14-July-2013
 * @author Sudheesh Singanamalla
 */
public enum Tech implements Indicator {
    EXAMPLE(0, "Example label");
    
    private int code;
    private String label;

    private Tech(int code, String label) {
        this.code = code;
        this.label = label;
    }
    
    @Override
    public int getCode() {
        return code;
    }

    @Override
    public String getLabel() {
        return label;
    }

    public static Tech getRandom(){
        Tech[] indicators = Tech.values();
        return indicators[new Random().nextInt(indicators.length)];
    }
}
