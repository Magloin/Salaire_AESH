import { useContext } from "react"
import Card from "../base/Card"
import { DataContext, DataDispatchContext } from "../../contexts/DataContext"

function Coef() {
    const data = useContext(DataContext)
    const dispatch = useContext(DataDispatchContext)

    let values = data.input.coefValues
    let defaultValue = data.input.coef

    let options = values.map((value, index) => {
        return <option key={value} className="text-center" value={value}>Echelon {index + 1} ({value})</option>
    })

    function setNewCoef(newValue) {
        dispatch({ type: "coef", value: newValue })
    }

    return (<Card>
        <h2 className=" text-left font-bold max-sm:text-xs md:text-sm lg:text-xl pl-1.5 xl:text-2xl xl:pl-3">Echelon</h2>
        <div className="text-center pt-1 w-30 max-sm:text-sm"> 
            <select onChange={e => setNewCoef(e.target.value)} name="coef" id="coefEchSelect" defaultValue={defaultValue} className="bg-zinc-200 h-auto mb-2 w-5/6 rounded-lg  hover:bg-green-400 max-sm:text-xs xl:text-2xl">
                {
                    options
                }
            </select>
        </div>  
    </Card>)
}
export default Coef