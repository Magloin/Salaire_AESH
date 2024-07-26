import Card from "../base/Card";
import ChildNb from "../base/ChildNb";
import Checkbox from "../base/Checkbox";

function Sft() {
    return ( <Card>
        <h1 className="text-lg text-center font-extrabold">Perception de la SFT</h1>
        <Checkbox leftValue={"Non"} rightValue={"Oui"} />
            <Card>
                <h1 className="text-lg text-center font-bold">Nombre d'enfant total</h1>
                <ChildNb/>
            </Card>
            <Card>
                <h1 className="text-lg text-center font-bold">Nb d'enfant de moins de 20 ans</h1>
                <ChildNb/>
            </Card>
     </Card>

    )
}

export default Sft