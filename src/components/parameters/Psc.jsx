import { useContext } from "react";
import Card from "../base/Card";
import Checkbox from "../base/Checkbox";
import { DataContext, DataDispatchContext } from "../../contexts/DataContext"

function Psc () {
    const data = useContext(DataContext)
    const dispatch = useContext(DataDispatchContext) 

    let leftValue ="Non"
    let rightValue= "Oui"
    let hasPsc = data.input.hasPsc
    
    function setHasPscNewValue(newValue) {
        dispatch({ type: "hasPsc", value: newValue })
    }

    return (
        <Card >
            <h2 className="text-lg text-left pl-1.5 font-extrabold max-sm:text-xs md:text-sm lg:text-2xl">Perception de la PSC</h2>
            <Checkbox leftValue={leftValue} rightValue={rightValue} defaultValue={hasPsc} setNewValue={setHasPscNewValue} />
        </Card>
    )
}

export default Psc