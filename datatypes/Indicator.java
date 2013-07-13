
package gpfinance.datatypes;

/**
 * @date   14-July-2013
 * @author Sudheesh Singanamalla
 */
public interface Indicator {
    /**
     * This class exists to abstract an Indicator type into a "enum" class
     */
    public int getCode();
    public String getLabel();
}
