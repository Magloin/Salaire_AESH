import { useContext } from "react";
import Card from "../base/Card";
import Checkbox from "../base/Checkbox";
import { DataContext, DataDispatchContext } from "../../contexts/DataContext";

function etabRep () {
    const data = useContext(DataContext)
    const dispatch = useContext(DataDispatchContext)
    let isRep = data.input.isRep
    let isRepPlus = data.input.isRepPlus

    console.log("IsRep", isRep)
    console.log("IsRepPlus", isRepPlus)

    function setIsRepNewValue(newValue) {
        dispatch({ type: "isRep", value: newValue })
    }
    function setIsRepPlusNewValue(newValue){
        dispatch({ type: "isRepPlus", value: newValue })
    }

    return (<Card>
         <h2 className="text-lg text-center font-extrabold">En établissement REP</h2>
        <Checkbox leftValue={"Non"} rightValue={"Oui"} defaultValue={isRep} setNewValue={setIsRepNewValue}/>
        { isRep &&
            <div className="pr-2">
                <Checkbox leftValue={"Rep"} rightValue={"Rep+"} defaultValue={isRepPlus} setNewValue={setIsRepPlusNewValue} />
            </div>
        }
    </Card>)
}
export default etabRep