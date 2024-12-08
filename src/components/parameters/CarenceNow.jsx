import { useContext } from "react"
import Card from "../base/Card"
import { DataContext } from "../../contexts/DataContext"


function CarenceNow() {
    const data = useContext(DataContext)
    const echelon = (data.input.coefValues.indexOf(data.input.coef) ?? 0) + 1
    const school = data.input.school
    const output = data.carenceOutput

    return (<div className="Flex self-center max-sm:pb-60 max-sm:pt-8 ">
        <div className="text-xl bg-zinc-300 border-solid border-4 border-gray-600  pl-2 rounded-tr-md max-sm:flex-row max-sm:pl-0">
            <Card><p className="text-center text-3xl max-sm:text-xs max-sm:font-bold bg-purple-500 text-yellow-100">Actuellement</p></Card>
            <Card>
                 <div className="text-center max-sm:text-xs">
                    <p>Votre salaire : <span className="font-bold"> {data.salaryOutput.aPercevoir.toFixed(2)} € </span> (<span className="text-red-500 font-bold">sans jour de carence</span>) </p>      
                </div>        
            </Card>
            <Card><p className="text-center max-sm:text-xs"> Un <span className="font-bold">Jour</span> de carence</p></Card>
            <Card>
                <div className=" text-center max-sm:text-xs">
                    <div >
                        <p className="text-center"> Retenu : <span className="font-bold">{output.OneDayCarenceSalaryNetLost.toFixed(2)} €</span> </p>  
                    </div>
                </div>
            </Card>
            <Card><p className="text-center max-sm:text-xs"> Salaire perçu : <span className="font-bold text-red-500">{output.oneDayCarenceRealSalary.toFixed(2)}</span> €  </p></Card>
            <Card> <p className="text-center max-sm:text-xs">Perte de revenue de <span className="font-bold text-red-500">{output.oneDayCarenceLost.toFixed(1)}</span> % </p> </Card>
            
        </div>
    </div>)
}

export default CarenceNow