import { useContext } from "react"
import Card from "../base/Card"
import { DataContext } from "../../contexts/DataContext"


function KasbarianCarence() {
    const data = useContext(DataContext)
    const output = data.carenceOutput
    const computedHthreeealDays = data.input.heal - 1

    return (<div className="Flex self-start max-sm:text-xs w-3/5">
        <div className="text-xl bg-zinc-300 border-solid border-4 border-gray-600  pl-0 rounded-tr-md max-sm:pl-0.5 max-sm:pr- mt-1">
        <Card>
                <div class="flex justify-center items-center  xl:py-3.5 md:py-3 py-2">
                    <div>   
                        <p className="text-center text-xl max-sm:text-xs max-sm:font-bold px-0.5 max-md:text-xl font-extrabold  ">Demain</p>
                    </div>
                </div>
            </Card>
            <Card>
                 <div className="max-sm:text-xs max-md:text-xl">
                    <p className="text-left pl-1 underline font-extrabold">Salaire</p>
                    <div className="text-right">
                        <span className="font-bold pr-1"> {data.salaryOutput.aPercevoir.toFixed(2)}€ </span> 
                    </div>       
                </div>        
            </Card>
            <Card>
                <div className="max-sm:text-xs md:text-lg align-middle">
                    <p className="underline font-extrabold md:pl-1">Carence</p>
                </div>
                 <div className="text-right pr-1">
                     <span className="font-bold pl-1">1 Jours</span>
                 </div>
                  <div >
                    <p className="text-left pl-1 underline font-extrabold md:text-base">Salaire 90%</p>
                    </div>
                    <div className="text-right pr-1">
                    <span className="md:text-base font-bold text-right pr-1">{computedHthreeealDays} jours</span> 
                 </div>
                {/* <p className="text-center md:text-xl"> Arrêt maladie :<br/> <span  className="font-bold">{input.heal} jours </span></p> */}
            </Card>
            <Card>
                    <div className="bg-yellow-400/30 max-sm:text-xs max-md:text-xl">
                        {/*<p className="text-center pl-2 pr-2 pt-1 pb-1 md:text-xl">{input.heal} jours de maladie  :<br/> </p>*/}
                        <div className=" bg-yellow-400 text-left pl-1">
                            <p className="font-extrabold md:font-medium underline">Retenu</p>
                        </div>
                        <div className="text-right pr-1">
                            <span className="italic font-extrabold">{output.threeDayCarenceSalaryNetLost.toFixed(2)} €</span>
                        </div>     
                    </div>
            </Card>
            <Card>
                <div className="bg-red-700/30 max-sm:text-xs max-md:text-xl">
                    <div className="bg-red-700 text-left">
                        <p className="font-extrabold underline md:font-medium md:pl-1">Salaire perçu</p>
                    </div>
                    <div className="text-right pr-1">
                        <span className="font-extrabold text-red-700 italic">{output.threeDayCarenceRealSalary.toFixed(2)} €</span> 
                    </div>
                </div>
            </Card>
            <Card>
                <div className=" max-sm:text-xs max-md:text-xl">
                    <p className="bg-yellow-600 text-left font-extrabold underline md:font-medium md:pl-1">Perte salaire</p>
                </div>
                <div className="text-right pr-1 bg-yellow-600/30">
                    <span className="font-extrabold text-yellow-600 italic">{output.TreeDayCarenceLost.toFixed(2)} %</span> 
                </div> 
            </Card>
            
        </div>
    </div>)
}

export default KasbarianCarence