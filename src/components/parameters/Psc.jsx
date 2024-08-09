import Card from "../base/Card";
import Checkbox from "../base/Checkbox";

function Psc () {
    let leftValue ="Non"
    let rightValue= "Oui"
    
    return(
        <Card >
            <h2 className="text-lg text-center font-extrabold">Perception de la PSC</h2>
            <Checkbox leftValue={`${leftValue}`} rightValue={`${rightValue}`} />

        </Card>)
}

export default Psc