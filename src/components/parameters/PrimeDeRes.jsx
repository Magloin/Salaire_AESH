import Card from "../base/Card"
import Checkbox from "../base/Checkbox"

function PrimeDeRes() {

    let leftValue = 1
    let rightValue = 3

    return (<Card>
         <h2 className="text-lg text-center font-bold">Prime de résidence</h2>
         <Checkbox leftValue={`${leftValue}%`} rightValue={`${rightValue}%`} />
    </Card>)
}
export default PrimeDeRes