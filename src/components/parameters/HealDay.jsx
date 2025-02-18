import { useContext } from "react"
import Card from "../base/Card"
import { DataContext, DataDispatchContext } from "../../contexts/DataContext"

function HealDay() {
    const data = useContext(DataContext)
    const dispatch = useContext(DataDispatchContext)
    

    let values = data.input.healDayValues
    let defaultValue = data.input.heal

    let options = values.map((value, index) => {
        return <option key={value} className="text-center" value={value}>  {value} jours d'arrêts</option>
    })

    function setNewheal(newValue) {
        dispatch({ type: "heal", value: newValue })
    }

    return (<Card>
        <h2 className=" text-left font-bold max-sm:text-xs md:text-sm lg:text-xl pl-1.5 xl:text-2xl xl:pl-3">Nombre de jours d'arrêts</h2>
        <div className="text-center pt-1 w-30"> 
            <select onChange={e => setNewheal(e.target.value)} name="heal" id="healSelect" defaultValue={defaultValue} className="max-sm:text-xs bg-zinc-200 h-auto mb-2 w-5/6 rounded-lg  hover:bg-green-400 max-sm:ml-0 xl:text-2xl">
                {
                    options
                }
            </select>
        </div>  
    </Card>)
}
export default HealDay