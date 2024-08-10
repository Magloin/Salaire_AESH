import Card from "../base/Card"
import Checkbox from "../base/Checkbox"
import RadioButton from "../base/RadioButton"

function PrimeDeRes() {

    let leftValue = 'Oui'
    let rightValue = 'Non'

    return (<Card>
         <h2 className=" text-lg text-center  font-bold">Prime de résidence</h2>
         <Checkbox leftValue={`${leftValue}`} rightValue={`${rightValue}`} />
            <div className=" flex justify-center items-center bg-white border-solid border-4 border-gray-600 h-auto mx-auto my-auto shadow-lg- rounded-tr-lg rounded-bl-lg w-5/6 texte-xs rounded-lg hover:border-green-400 ">
                <RadioButton rightValueNum="0%" className="justify-center items-center"/>
                <RadioButton rightValueNum="1%"/>
                <RadioButton rightValueNum="3%" className=""/>
             </div>
    </Card>)
}
export default PrimeDeRes