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
       
        <div className="text-xl bg-zinc-300 border-solid border-4 border-gray-600  pl-0 rounded-tr-md max-sm:pl-0 mt-1">
            <Card>
                <div className="flex justify-center bg-purple-500 xl:py-1 md:py-3 py-2">
                    <div>   
                        <p className="text-center text-xl max-sm:text-sm max-sm:py-1.5 max-sm:font-bold px-0.5 max-md:text-xl font-extrabold lg:text-2xl xl:text-3xl xl:font-bold ">Avant</p>
                    </div>
                </div>
            </Card>
            <Card>
                <div className="sm:text-xs md:text-lg align-middle">
                    <p className="underline font-extrabold md:pl-1 lg:text-2xl xl:text-2xl xl:font-semibold">Carence : <span className="font-bold lg:text-2xl xl:text-2xl xl:font-semibold text-red-500">1 Jour </span>  </p>
                    <div >
                        <p className="text-left pl-1 underline font-extrabold md:text-base lg:text-2xl xl:text-2xl xl:font-semibold">Salaire 100% : <span className="font-bold text-right text-red-500  lg:text-2xl xl:text-2xl xl:font-semibold">{computedHealDays} jours</span> </p>
                    </div>
                </div>
            </Card>
            <Card>
                 <div className="max-sm:text-xs max-md:text-xl">
                    <p className="text-left pl-1 underline font-extrabold lg:text-2xl xl:font-semibold xl:text-2xl max-md:text-xs">Salaire attendu</p>
                    <div className="text-right">
                        <span className="font-bold pr-1 lg:text-2xl xl:text-2xl xl:font-semibold"> {data.salaryOutput.aPercevoir.toFixed(2)} € </span>  
                    </div>      
                </div>        
            </Card>
           
            <Card>
                <div className="bg-yellow-400/30 max-sm:text-xs md:text-xl">
                    <div >
                        <p className="bg-yellow-400 text-left pl-1 font-extrabold md:font-medium underline lg:text-2xl xl:text-2xl xl:font-semibold">Retenu</p>
                        <div className="text-right">
                            <span className=" pr-1 italic font-extrabold lg:text-2xl xl:font-semibold xl:text-2xl ">{output.OneDayCarenceSalaryNetLost.toFixed(2)} €</span>  
                        </div>
                    </div>
                </div>
            </Card>
            <Card>
                <div className=" bg-red-700/30 max-sm:text-xs max-md:text-xl">
                    <p className="bg-red-700 text-left font-extrabold underline md:font-medium pl-1 xl:text-2xl lg:text-2xl xl:font-medium lg:text-slate-200 xl:text-slate-200"> Salaire perçu</p>
                    <div className="text-right xl:text-2xl lg:text-2xl xl:font-semibold font-extrabold">
                        <span className="text-red-700 pr-1 italic">{output.oneDayCarenceRealSalary.toFixed(2)} €</span>  
                    </div>
                </div>
            </Card>
            {/*<Card>
                 <div className="bg-yellow-600/30 max-sm:text-xs md:text-xl xl:text-2xl ">
                    <p className=" bg-yellow-600 text-left font-extrabold underline md:font-medium pl-1 xl:text-2xl xl:font-semibold">Perte salaire</p>
                    <div className="text-right pr-1 xl:font-semibold xl:text-2xl">
                        <span className="font-extrabold text-yellow-600 italic">{output.oneDayCarenceLost.toFixed(2)} %</span>  
                    </div>
                </div>
            </Card>*/}
        </div>
    </div>)
}

export default CarenceNow