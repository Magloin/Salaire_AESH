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
            <Card><p className="text-center text-3xl">Actuellement</p></Card>
            <Card>
                 <div className="text-center">
                    <p>Votre salaire est de <span className="font-bold"> {data.salaryOutput.aPercevoir.toFixed(0)} € </span> (<span className="text-red-500 font-bold">sans jour de carence</span>) </p>      
                </div>        
            </Card>
            <Card><p className="text-center">Avec un seul <span className="font-bold">Jour</span> de carence</p></Card>
            <Card>
                <div className=" text-center">
                    <div >
                        <p className="text-center">il sera retenu : <span className="font-bold">{output.oneDayCarence.toFixed(0)} €</span> </p>  
                    </div>
                </div>
            </Card>
            <Card><p className="text-center"> Votre salaire perçu sera de <span className="font-bold text-red-500">{output.oneDayCarenceRealSalary.toFixed(0)}</span> €  </p></Card>
            <Card> <p className="text-center">Soit une perte de revenue de <span className="font-bold text-red-500">{output.oneDayCarenceLost.toFixed(1)}</span> % </p> </Card>
            
        </div>
    </div>)
}

export default CarenceNow