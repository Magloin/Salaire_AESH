import { useContext } from "react"
import Card from "../base/Card"
import Checkbox from "../base/Checkbox"
import RadioButton from "../base/RadioButton"
import { DataContext, DataDispatchContext } from "../../contexts/DataContext"

function PrimeDeRes() {
    const data = useContext(DataContext)
    const dispatch = useContext(DataDispatchContext)

    let leftValue = "Non"
    let rightValue = "Oui"
    let hasRes = data.input.hasResidencePrime
    let resValue = data.input.residenceValue

    function setNewHasResidenceValue(newValue) {
        dispatch({ type: "hasResidencePrime", value: newValue })
    }

    function setNewResValue(newValue) {
        dispatch({ type: "residenceValue", value: newValue })
    }

    return (<Card>
        <h2 className=" text-lg text-center  font-bold">Indemnité de résidence</h2>
        <Checkbox leftValue={`${leftValue}`} rightValue={`${rightValue}`} defaultValue={hasRes} setNewValue={setNewHasResidenceValue} />
        {
            hasRes &&
            <div className=" flex justify-center items-center bg-white border-solid border-4 border-gray-600 h-auto mx-auto my-auto shadow-lg- rounded-tr-lg rounded-bl-lg w-5/6 texte-xs rounded-lg hover:border-green-400 mb-2 ">
                <RadioButton value={0} labelValue="0%" isChecked={hasRes && resValue === 0} setNewValue={setNewResValue} className="justify-center items-center"/>
                <RadioButton value={1} labelValue="1%" isChecked={hasRes && resValue === 1} setNewValue={setNewResValue} />
                <RadioButton value={3} labelValue="3%" isChecked={hasRes && resValue === 3} setNewValue={setNewResValue} className=""/>
            </div>
        }
    </Card>)
}
export default PrimeDeRes