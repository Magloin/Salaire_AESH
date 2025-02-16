import { useContext } from "react"
import Card from "../base/Card"
import { DataContext } from "../../contexts/DataContext"


function CarenceNow() {
    const data = useContext(DataContext)
    const echelon = (data.input.coefValues.indexOf(data.input.coef) ?? 0) + 1
    const school = data.input.school
    const output = data.carenceOutput
    const computedHealDays = data.input.heal - 1

    return (
    <div className="self-start  max-sm:pt-0 max-md:pt-2 w-3/5">
       
        <div className="text-xl bg-zinc-300 border-solid border-4 border-gray-600  pl-2 rounded-tr-md max-sm:pl-0">
            <Card>
                <div class="flex justify-center items-center bg-purple-500 xl:py-3.5 md:py-3 py-2">
                    
                    <div>   
                        <p className="text-center text-3xl max-sm:text-xs max-sm:font-bold bg-purple-500 text-yellow-100 px-0.5 md:text-xl  ">Actuellement </p>
                    </div>
                    
                </div>
            </Card>
            <Card>
                 <div className="max-sm:text-xs md:text-xl">
                    <p className="text-left pl-1">Salaire : </p>
                    <div className="text-right">
                        <span className="font-bold pr-1"> {data.salaryOutput.aPercevoir.toFixed(2)} € </span>  
                    </div>      
                </div>        
            </Card>
            <Card>
                <div className="max-sm:text-xs md:text-xl align-middle">
                    <p className="text-left  pl-1">Carence :</p>
                    <div className="text-right pr-1">
                        <span className="font-bold pl-1">1 Jour </span> 
                    </div>
                    <div >
                    <p className="text-left pl-1 ">Salaire 100%</p>
                    </div>
                    <div className="text-right pr-1">
                    <span className=" font-bold text-right pr-1">{computedHealDays} jours</span> 
                 </div>
                </div>
            </Card>
            <Card>
                <div className="bg-yellow-400/30 max-sm:text-xs md:text-xl">
                    <div >
                        <p className="bg-yellow-400 text-left pl-1 font-bold"> Retenu :</p>
                        <div className="text-right">
                            <span className=" pr-1 ">{output.OneDayCarenceSalaryNetLost.toFixed(2)} €</span>  
                        </div>
                    </div>
                </div>
            </Card>
            <Card>
                <div className=" bg-red-700/30 max-sm:text-xs md:text-xl">
                    <p className="bg-red-700 text-left font-medium"> Salaire perçu :</p>
                    <div className="text-right">
                        <span className=" font-extrabold text-red-700 pr-1">{output.oneDayCarenceRealSalary.toFixed(2)} €</span>  
                    </div>
                </div>
            </Card>
            <Card>
                 <div className="bg-yellow-600/30 max-sm:text-xs md:text-xl">
                    <p className=" bg-yellow-600 text-left pl-.5 font-bold">Perte salaire : </p>
                    <div className="text-right pr-1">
                        <span className="font-extrabold text-yellow-600">{output.oneDayCarenceLost.toFixed(1)} %</span>  
                    </div>
                </div>
            </Card>
        </div>
    </div>)
}

export default CarenceNow