
package gpfinance.algorithm.interfaces;

import gpfinance.algorithm.Individual;
import java.util.ArrayList;

/**
 * @date   14-July-2013
 * @author Sudheesh Singanamalla
 */
public interface SelectionStrategy {
    public ArrayList<Individual> select(ArrayList<Individual> pool);
    public ArrayList<Individual> select(ArrayList<Individual> pool, int selectionSize);
}
