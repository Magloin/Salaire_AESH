import Card from "../base/Card";
import ChildNb from "../base/ChildNb";
import Checkbox from "../base/Checkbox";
import { useContext } from "react";
import { DataContext, DataDispatchContext } from "../../contexts/DataContext";

function Sft() {
    const data = useContext(DataContext)
    const dispatch = useContext(DataDispatchContext)
    
    let hasSft = data.input.hasSft
    let nbChildDefaultValue = data.input.childNb
    let nbChildUnder20DefaultValue = data.input.childNbUnder20

    function sethasSftNewValue(newValue) {
        dispatch({ type : "hasSft", value:newValue})
    }

    function setChildNb(newValue) {
        dispatch({ type: "childNb", value: newValue })
    }
    function setChildUnder20(newValue) {
        dispatch({ type: "childNbUnder20", value: newValue })
    }

    return ( <Card>
        <h2 className="text-lg text-center font-extrabold max-sm:text-xs md:text-sm md:text-sm lg:text-2xl">Perception de la SFT</h2>
        <Checkbox leftValue={"Non"} rightValue={"Oui"} defaultValue={hasSft} setNewValue={sethasSftNewValue}/>
            { hasSft &&
                <div>
                   
                    <Card>
                        <h2 className="text-lg text-center font-bold md:text-sm">Nb d'enfant de moins de 20 ans</h2>
                        <ChildNb handleZero={true} defaultValue={nbChildUnder20DefaultValue} handleChange={setChildUnder20} />
                    </Card>
                </div>
            }
     </Card>

    )
}

export default Sft