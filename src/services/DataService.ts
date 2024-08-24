import Data from "../data/Data";
import InputData from "../data/InputData";
import OutputData from "../data/OutputData";

function DataServiceCompute(input: InputData): Data {

    const newOutput: OutputData = {
        addition: input.quotite + input.coef
    }

    return new Data(input, newOutput)
}

export default DataServiceCompute