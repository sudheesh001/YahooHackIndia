
package gpfinance.algorithm;

import gpfinance.algorithm.interfaces.SelectionStrategy;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

/**
 * @date   14-July-2013
 * @author Sudheesh Singanamalla
 */
public class MuLambdaSelectionStrategy implements SelectionStrategy {

    public MuLambdaSelectionStrategy() { }
    
    @Override
    public ArrayList<Individual> select(ArrayList<Individual> pool){
        return null;
    }
    
    @Override
    public ArrayList<Individual> select(ArrayList<Individual> pool, int selectionSize){
        ArrayList<Individual> selected = new ArrayList(selectionSize);
        
        // sort pool by fitness
        Collections.sort(selected, Individual.IndividualComparator);
        
        // loop from fittest individuals up to selectionSize
        for (int i = 0; i < selectionSize; ++i){
            selected.add(pool.get(i));
        }
        
        return selected;
    }
}
