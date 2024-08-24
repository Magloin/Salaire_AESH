import Data from "../data/Data";
import InputData from "../data/InputData";
import DataServiceCompute from "../services/DataService";

function dataReducer(data: Data, action) {
    const newInput = { ...data.input }

    if (action.type === "coef") {
        let numberValue = Number(action.value)
        newInput.coef = numberValue
    }
    if (action.type === "quotite") {
        let numberValue = Number(action.value)
        newInput.quotite = numberValue
    }
    if (action.type === "hasResidencePrime") {
        newInput.hasResidencePrime = action.value
        newInput.residenceValue = action.value ? 1 : null
    }
    if (action.type === "residenceValue") {
        newInput.residenceValue = action.value
    }

    return DataServiceCompute(newInput)
}

export default dataReducer;