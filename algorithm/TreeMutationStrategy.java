
package gpfinance.algorithm;

import gpfinance.algorithm.interfaces.MutationStrategy;
import java.util.ArrayList;

/**
 * @date   14-July-2013
 * @author Sudheesh Singanamalla
 */
public class TreeMutationStrategy implements MutationStrategy {
    
    double[] rates;
    
    public TreeMutationStrategy(double[] rates){
        this.rates = rates;
    }
    
    @Override
    public ArrayList<Individual> mutate(ArrayList<Individual> population, double progress){
        ArrayList<Individual> mutatedOffspring = new ArrayList();
        return mutatedOffspring;
    }
}
