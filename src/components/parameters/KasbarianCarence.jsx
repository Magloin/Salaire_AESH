import { useContext } from "react"
import Card from "../base/Card"
import { DataContext } from "../../contexts/DataContext"


function KasbarianCarence() {
    const data = useContext(DataContext)
    const input = data.input
    
    const echelon = (data.input.coefValues.indexOf(data.input.coef) ?? 0) + 1
    const school = data.input.school
    const heal = data.input.heal
    const output = data.carenceOutput

    return (<div className="Flex self-center max-sm:text-xs max-sm:pb-0">
        <div className="text-xl bg-zinc-300 border-solid border-4 border-gray-600  pl-2 rounded-tr-md max-sm:pl-0">
            <Card><p className="text-center text-3xl max-sm:text-xs">Réforme <span className="font-bold">Kasbarian</span> </p></Card>
            
            <Card>
                 <div className="text-center">
                    <p>Salaire : <span className="font-bold"> {data.salaryOutput.aPercevoir.toFixed(2)} € </span> (<span className="text-red-500 font-bold max-sm:text-xs">sans jour de carence</span>) </p>      
                </div>        
            </Card>
            <Card>
                <p className="text-center"> Pour un arrêt maladie de <span  className="font-bold ">{input.heal} jour(s)</span>,</p>
                <p className="text-center"> <span className="font-bold text-red-500 text-center">3</span> <span className="font-bold text-red-500 text-center">Jours</span> de carence et <span className="text-red-500 font-bold text-center">{input.heal-3}</span> jours à 90% de traitement</p></Card>
            <Card>
                <div className=" text-center">
                    <div >
                        <p className="text-center">Retenu  pour  {input.heal} jours de maladie  : <span className="font-bold">{output.threeDayCarenceSalaryNetLost.toFixed(2)} €</span> </p>  
                    </div>
                </div>
            </Card>
            <Card><p className="text-center"> Salaire perçu de <span className="font-bold text-red-500">{output.threeDayCarenceRealSalary.toFixed(2)}</span> €  </p></Card>
            <Card> <p className="text-center"> Perte de revenue de <span className="font-bold text-red-500">{output.TreeDayCarenceLost.toFixed(2)}</span> % </p> </Card>
            
        </div>
    </div>)
}

export default KasbarianCarence