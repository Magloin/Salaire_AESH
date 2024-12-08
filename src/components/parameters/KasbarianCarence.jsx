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

    return (<div className="Flex self-start max-sm:text-xs w-3/5 pr-1">
        <div className="text-xl bg-zinc-300 border-solid border-4 border-gray-600  pl-3 rounded-tr-md max-sm:pl-0.5 max-sm:pr-0">
            <Card><p className="text-center text-3xl max-sm:text-xs md:text-xl">Réforme <span className="font-bold">Kasbarian</span> </p></Card>
            
            <Card>
                 <div className="text-center px-2">
                    <p className="md:text-xl">Salaire :<br/> <span className="font-bold"> {data.salaryOutput.aPercevoir.toFixed(2)}€ </span> <span className="text-red-500 font-bold max-sm:text-xs"></span> </p>      
                </div>        
            </Card>
            <Card>
                <p className="text-center md:text-xl"> Arrêt maladie :<br/> <span  className="font-bold">{input.heal} jours </span></p>
                <p className="text-center"> <span className="font-bold text-red-500 text-center">3</span> <span className="font-bold text-red-500 text-center ">Jours</span> de carence,<br/> <span className="text-red-500 font-bold text-center">{input.heal-3}</span> jours à 90% de traitement</p>
            </Card>
            <Card>
                <div className=" text-center">
                    <div >
                        <p className="text-center pl-2 pr-2 pt-1 pb-1 md:text-xl">{input.heal} jours de maladie  :<br/> <span className="font-bold">{output.threeDayCarenceSalaryNetLost.toFixed(2)} €</span> de retenu </p>  
                    </div>
                </div>
            </Card>
            <Card><p className="text-center"> Salaire perçu :<br/><span className="font-bold text-red-500">{output.threeDayCarenceRealSalary.toFixed(2)}</span> €  </p></Card>
            <Card> 
                <p className="text-center px-0.5 py-0.5"> Perte  <span className="font-bold text-red-500">{output.TreeDayCarenceLost.toFixed(2)}</span> % de revenue </p>
            </Card>
            
        </div>
    </div>)
}

export default KasbarianCarence