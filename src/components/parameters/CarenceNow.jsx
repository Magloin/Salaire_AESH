import { useContext } from "react"
import Card from "../base/Card"
import { DataContext } from "../../contexts/DataContext"


function carenceActually () {
    const data = useContext(DataContext)
    const echelon = (data.input.coefValues.indexOf(data.input.coef) ?? 0) + 1
    const school = data.input.school
    
    return (<div className="Flex self-center">
        <div className="text-xl bg-zinc-300 border-solid border-4 border-gray-600  pl-2 rounded-tr-md">
            <Card><p className="text-center text-Xl">Actuellement</p></Card>
            <Card>
                 <div className="text-center">
                    <p>Votre salaire est de <span className="font-bold"> {data.output.aPercevoir.toFixed(2)} € </span> </p>      
                </div>        
            </Card>
            <Card><p className="text-center">Avec un seul <span className="font-bold">Jour</span> de carence, il sera retenu : </p></Card>
            <Card>
                <div className="flex grid grid-cols-2 justify-center text-center">
                
                    <div className="text-center">
                            <p>Temps de service :  <span className="font-bold">{data.input.quotite}%</span> </p>
                        <p><span className="font-bold">{data.output.workTime.toFixed(0)} h </span>d'accompagnement</p>
                    </div>
                    <div className="text-center">
                    <p> <span className="font-bold">{data.output.salaireBrut.toFixed(2)} € BRUT</span></p>
                        <p>de salaire</p> 
                        
                    </div>
                </div>
            </Card>

            {
                school?.isRep === true &&
                <Card>
                    <div className="Flex items-center" >
                        <p className="text-center">
                            Vous êtes affecté dans une établissement en zone <span className="font-bold text-red-500">REP {school?.isRepPlus === true ? '+' : ''}</span>
                        </p>
                    </div>
                </Card>
            }
        </div>
    </div>)
}

export default carenceActually