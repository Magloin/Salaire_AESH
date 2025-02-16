import { useContext } from "react"
import Card from "../base/Card"
import { DataContext } from "../../contexts/DataContext"


function KasbarianCarence() {
    const data = useContext(DataContext)
    const output = data.carenceOutput
    const computedHthreeealDays = data.input.heal - 3

    return (<div className="Flex self-start max-sm:text-xs w-3/5 pr-1">
        <div className="text-xl bg-zinc-300 border-solid border-4 border-gray-600  pl-3 rounded-tr-md max-sm:pl-0.5 max-sm:pr-0">
            <Card>
                <div className="text-3xl max-sm:text-xs md:text-xl">
                    <p className="text-left pl-1 ">Réforme </p>
                </div>
                <div className="text-right pr-1">
                    <span className="font-bold">MARCANGELI</span>
                </div>        
            </Card>
            <Card>
                 <div className="">
                    <p className="md:text-xl text-left pl-1">Salaire :</p>
                    <div className="text-right pr-1">
                        <span className="font-bold max-sm:text-xs"> {data.salaryOutput.aPercevoir.toFixed(2)}€ </span> 
                    </div>       
                </div>        
            </Card>
            <Card>
                <div className="">
                    <p className="text-left pl-1">Carence :</p>
                </div>
                 <div className=" text-right pr-1">
                     <span className="font-bold">3 Jours</span>
                 </div>
                  <div >
                    <p className="text-left pl-1 ">Salaire 90%</p>
                    </div>
                    <div className="text-right pr-1">
                    <span className=" font-bold text-right pr-1">{computedHthreeealDays} jours</span> 
                 </div>
                {/* <p className="text-center md:text-xl"> Arrêt maladie :<br/> <span  className="font-bold">{input.heal} jours </span></p> */}
            </Card>
            <Card>
                    <div >
                        {/*<p className="text-center pl-2 pr-2 pt-1 pb-1 md:text-xl">{input.heal} jours de maladie  :<br/> </p>*/}
                        <div className="text-left pl-1">
                            <p>Retenu</p>
                        </div>
                        <div className="text-right pr-1">
                            <span className="font-bold text-yellow-400 ">{output.threeDayCarenceSalaryNetLost.toFixed(2)} €</span>
                        </div>     
                    </div>
            </Card>
            <Card>
                <div className=" text-left pl-1">
                    <p className="text-center">Salaire perçu :</p>
                </div>
                <div className="text-right pr-1">
                    <span className="font-extrabold text-red-700">{output.threeDayCarenceRealSalary.toFixed(2)} €</span> 
                </div>
                
            </Card>
            <Card>
                <div>
                    <p className="text-left pl-1">Perte salaire :</p>
                </div>
                <div className="text-right pr-1">
                    <span className="font-bold text-yellow-600">{output.TreeDayCarenceLost.toFixed(2)} %</span> 
                </div> 
            </Card>
            
        </div>
    </div>)
}

export default KasbarianCarence