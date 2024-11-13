import Data from "../data/Data";
import InputData from "../data/InputData";
import DataServiceCompute from "../services/DataService";

function dataReducer(data: Data, action) {
    const newInput = { ...data.input }

    console.log("Data", data, "action", action)
    
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
    if (action.type === "school") {
        newInput.school = action.value
    }
    if (action.type === "ips") {
        newInput.school.ips = action.value
    }
    if (action.type === "ivac") {
        newInput.school.ivac = action.value
    }
    if (action.type === "residenceValue") {
        newInput.residenceValue = action.value
    }
    if (action.type === "hasPsc") {
        newInput.hasPsc = action.value
    }
    if (action.type === "hasSft") {
        newInput.hasSft = action.value
        newInput.childNbUnder20 = 0
    }
    if (action.type === "childNbUnder20") {
        let numberValue = Number(action.value)
        newInput.childNbUnder20 = numberValue
    }

    return DataServiceCompute(newInput)
}

export default dataReducer;