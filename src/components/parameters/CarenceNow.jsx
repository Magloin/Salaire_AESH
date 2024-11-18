import { useContext } from "react"
import Card from "../base/Card"
import { DataContext } from "../../contexts/DataContext"


function CarenceNow() {
    const data = useContext(DataContext)
    const echelon = (data.input.coefValues.indexOf(data.input.coef) ?? 0) + 1
    const school = data.input.school
    const output = data.carenceOutput

    return (<div className="Flex self-center">
        <div className="text-xl bg-zinc-300 border-solid border-4 border-gray-600  pl-2 rounded-tr-md">
            <Card><p className="text-center text-3xl max-sm:text-lg max-sm:font-bold">Actuellement</p></Card>
            <Card>
                 <div className="text-center max-sm:text-lg">
                    <p>Votre salaire est de <span className="font-bold"> {data.salaryOutput.aPercevoir.toFixed(2)} € </span> (<span className="text-red-500 font-bold">sans jour de carence</span>) </p>      
                </div>        
            </Card>
            <Card><p className="text-center">Avec un seul <span className="font-bold">Jour</span> de carence</p></Card>
            <Card>
                <div className=" text-center max-sm:text-lg">
                    <div >
                        <p className="text-center">il sera retenu : <span className="font-bold">{output.OneDayCarenceSalaryNetLost.toFixed(2)} €</span> </p>  
                    </div>
                </div>
            </Card>
            <Card><p className="text-center max-sm:text-lg"> Votre salaire perçu sera de <span className="font-bold text-red-500">{output.oneDayCarenceRealSalary.toFixed(2)}</span> €  </p></Card>
            <Card> <p className="text-center max-sm:text-lg">Soit une perte de revenue de <span className="font-bold text-red-500">{output.oneDayCarenceLost.toFixed(1)}</span> % </p> </Card>
            
        </div>
    </div>)
}

export default CarenceNow