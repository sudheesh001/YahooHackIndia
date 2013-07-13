
package gpfinance.algorithm;

import java.util.ArrayList;

/**
 * @date   14-July-2013
 * @author Sudheesh Singanamalla
 */
public class InitializationStrategy {
    
    private char analysisType;

    public InitializationStrategy(char analysisType) {
        this.analysisType = analysisType;
    }
    
    public void init(ArrayList<Individual> population){
        for (Individual individual : population){
            individual = new Individual(analysisType);
        }
    }
}
