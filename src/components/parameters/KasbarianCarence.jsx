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
                <div className="flex justify-center items-center  xl:py-1 md:py-3 py-2">
                    <div>   
                        <p className="text-center text-lg max-sm:text-xs max-sm:font-bold px-0.5 max-md:text-xl font-extrabold lg:text-xl xl:text-3xl xl:font-bold ">Depuis le 1<span className="ordinal">er</span> mars 2025</p>
                    </div>
                </div>
            </Card>
            <Card>
                <div className="max-sm:text-xs font-extrabold md:text-lg lg:text-2xl xl:text-2xl xl:font-semibold">
                    <p className="underline  md:pl-1">Carence :<span className="text-red-500"> 1 Jour </span></p>
                    
                        <p className="text-left pl-1 underline font-extrabold md:text-base lg:text-2xl xl:text-2xl xl:font-semibold">Salaire 90% : <span className="md:text-base text-red-500  text-right pr-1 font-bold pr-1 lg:text-2xl xl:text-2xl xl:font-semibold">{computedHthreeealDays} jours</span>  </p>
                 </div>
                {/* <p className="text-center md:text-xl"> Arrêt maladie :<br/> <span  className="font-bold">{input.heal} jours </span></p> */}
            </Card>
            <Card>
                 <div className="max-sm:text-xs max-md:text-xl font-extrabold lg:text-2xl xl:text-2xl xl:font-semibold">
                    <p className="text-left pl-1 underline">Salaire attendu</p>
                    <div className="text-right">
                        <span className="font-bold pr-1"> {data.salaryOutput.aPercevoir.toFixed(2)}€ </span> 
                    </div>       
                </div>        
            </Card>
           
            <Card>
                    <div className="bg-yellow-400/30 max-sm:text-xs max-md:text-xl">
                        {/*<p className="text-center pl-2 pr-2 pt-1 pb-1 md:text-xl">{input.heal} jours de maladie  :<br/> </p>*/}
                        <div className=" bg-yellow-400 text-left pl-1 lg:text-2xl xl:text-2xl xl:font-semibold">
                            <p className="font-extrabold md:font-semibold underline">Retenu</p>
                        </div>
                        <div className="text-right font-extrabold pr-1 lg:text-2xl xl:text-2xl xl:font-semibold">
                            <span className="italic ">{output.threeDayCarenceSalaryNetLost.toFixed(2)} €</span>
                        </div>     
                    </div>
            </Card>
            <Card>
                <div className="bg-red-700/30 max-sm:text-xs max-md:text-xl lg:text-2xl xl:text-2xl xl:font-semibold">
                    <div className="bg-red-700 text-left">
                        <p className="font-extrabold underline md:font-medium md:pl-1 lg:text-slate-200 xl:text-slate-200">Salaire perçu</p>
                    </div>
                    <div className="text-right pr-1">
                        <span className="font-extrabold text-red-700 italic">{output.threeDayCarenceRealSalary.toFixed(2)} €</span> 
                    </div>
                </div>
            </Card>
            {/*<Card>
                <div className=" max-sm:text-xs max-md:text-xl">
                    <p className="bg-yellow-600 text-left font-extrabold underline md:font-medium md:pl-1 xl:text-2xl xl:font-semibold">Perte salaire</p>
                </div>
                <div className="text-right pr-1 bg-yellow-600/30">
                    <span className="font-extrabold text-yellow-600 italic xl:text-2xl xl:font-semibold">{output.TreeDayCarenceLost.toFixed(2)} %</span> 
                </div> 
            </Card>*/}
            
        </div>
    </div>)
}

export default KasbarianCarence