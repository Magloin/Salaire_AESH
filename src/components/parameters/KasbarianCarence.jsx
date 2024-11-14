import { useContext } from "react"
import Card from "../base/Card"
import { DataContext } from "../../contexts/DataContext"


function KasbarianCarence() {
    const data = useContext(DataContext)
    const echelon = (data.input.coefValues.indexOf(data.input.coef) ?? 0) + 1
    const school = data.input.school
    const output = data.carenceOutput

    return (<div className="Flex self-center">
        <div className="text-xl bg-zinc-300 border-solid border-4 border-gray-600  pl-2 rounded-tr-md">
            <Card><p className="text-center text-3xl">Avec la reforme de Guillaume Kasbarian</p></Card>
            <Card><div>
                <ul className="text-center">
                    <li> 3 jours de carence</li>
                    <li> 90% du traitement au delà des 3 jours carence</li>
                </ul> 
                </div>
            </Card>
            <Card>
                 <div className="text-center">
                    <p>Votre salaire est de <span className="font-bold"> {data.salaryOutput.aPercevoir.toFixed(2)} € </span> (<span className="text-red-500 font-bold">sans jour de carence</span>) </p>      
                </div>        
            </Card>
            <Card>
                <p className="text-center"> Pour un arrêt maladie de <span  className="font-bold ">XX jour(s)</span>,</p>
                <p>Il y a <span className="font-bold text-red-500">3</span> <span className="font-bold text-red-500">Jours</span> de carence et <span className="text-red-500 font-bold">X</span> jours à 90% de traitement</p></Card>
            <Card>
                <div className=" text-center">
                    <div >
                        <p className="text-center">il sera retenu  pour les 3 jours de Carence : <span className="font-bold">{output.threeDayCarence.toFixed(2)} €</span> </p>  
                    </div>
                </div>
            </Card>
            <Card><p className="text-center"> Votre salaire perçu sera de <span className="font-bold text-red-500">{output.oneDayCarenceRealSalary.toFixed(2)}</span> €  </p></Card>
            <Card> <p className="text-center">Soit une perte de revenue de <span className="font-bold text-red-500">{output.oneDayCarenceLost.toFixed(2)}</span> % </p> </Card>
            
        </div>
    </div>)
}

export default KasbarianCarence