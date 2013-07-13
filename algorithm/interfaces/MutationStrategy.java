
package gpfinance.algorithm.interfaces;

import gpfinance.algorithm.Individual;
import java.util.ArrayList;

/**
 * @date   14-July-2013
 * @author Sudheesh Singanamalla
 */
public interface MutationStrategy {
    public ArrayList<Individual> mutate(ArrayList<Individual> population, double progress);
}
