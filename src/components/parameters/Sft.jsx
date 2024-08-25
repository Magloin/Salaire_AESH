import Card from "../base/Card";
import ChildNb from "../base/ChildNb";
import Checkbox from "../base/Checkbox";
import { useContext } from "react";
import { DataContext, DataDispatchContext } from "../../contexts/DataContext";

function Sft() {
    const data = useContext(DataContext)
    const dispatch = useContext(DataDispatchContext)
    let hasSft=data.input.hasSft

    function sethasSftNewValue (newValue){
        dispatch({ type : "hasSft", value:newValue})
    }

    return ( <Card>
        <h2 className="text-lg text-center font-extrabold">Perception de la SFT</h2>
        <Checkbox leftValue={"Non"} rightValue={"Oui"} defaultValue={hasSft} setNewValue={sethasSftNewValue}/>
            { hasSft &&
                <div>
                    <Card>
                        <h2 className="text-lg text-center font-bold">Nombre d'enfant total</h2>
                        <ChildNb/>
                    </Card>
                    <Card>
                        <h2 className="text-lg text-center font-bold">Nb d'enfant de moins de 20 ans</h2>
                        <ChildNb/>
                    </Card>
                </div>
            }
     </Card>

    )
}

export default Sft