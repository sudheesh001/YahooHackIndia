
package gpfinance.algorithm.interfaces;

import gpfinance.algorithm.Individual;
import java.util.ArrayList;

/**
 * @date   14-July-2013
 * @author Sudheesh Singanamalla
 */
public interface CrossoverStrategy {
    public ArrayList<Individual> crossover(ArrayList<Individual> population, double progress);
}
