import { useContext } from "react"
import Card from "../base/Card"
import { DataContext } from "../../contexts/DataContext"


function DescriptionPoste () {
    const data = useContext(DataContext)
    const echelon = (data.input.coefValues.indexOf(data.input.coef) ?? 0) + 1
    
    return (<div className="Flex self-center">
        <div className="text-xl bg-zinc-300 border-solid border-4 border-gray-600  pl-2 rounded-tr-md">
            <Card>
                <div className="flex grid grid-cols-2 items-center ">
                    <div className="text-center">
                        <p className="pl-2">Vous êtes <span className="font-bold">Echelon {echelon}</span></p>
                        <p className="pl-2">Votre coefficient est de  <span className="font-bold"> {data.input.coef}</span></p> 
                    </div>
                    <div>
                        <p className="text-center"> <span className="font-bold">{data.output.salaire.toFixed(2)} €</span> de salaire</p>
                        <p className="text-center"> en <span className="font-bold">E</span>quivalent <span className="font-bold">T</span>emps <span className="font-bold">P</span>lein</p> 
                    </div>
                </div>        
            </Card>

            <Card>
                <div className="flex grid grid-cols-2 justify-center">
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
                data.input.isRep &&
                <Card>
                    <div className="Flex items-center" >
                        <p className="text-center">
                            Vous êtes affecté dans une établissement en zone <span className="font-bold">REP {data.input.isRepPlus ? '+' : ''}</span>
                        </p>
                    </div>
                </Card>
            }
        </div>
    </div>)
}

export default DescriptionPoste