import { useContext } from "react"
import Card from "../base/Card"
import { DataContext, DataDispatchContext } from "../../contexts/DataContext"
import Data from "../../data/Data"

function QuotitePercent() {

    const data = useContext(DataContext)
    const dispatch = useContext(DataDispatchContext)

    let values = [50, 52, 57, 60, 62, 66, 70,75,80, 82,90, 100]
    let defaultValue = data.input.quotite
      

    let options = values.map((value, index) => {
        return <option key={index} className="text-center" value={value}>{value} % </option>
    })
    
    function setNewQuotite(newValue) {
        dispatch({ type: "quotite", value: newValue })
    }

    return <Card>
        <h2 className="text-lg text-left pl-1.5 font-extrabold max-sm:text-xs md:text-sm xl:text-3xl xl:pl-3">Quotité</h2>
        <div className="text-center pt-1 hover:font-bold"> 
            <select onChange={e => setNewQuotite(e.target.value)} name="quot" defaultValue={defaultValue} id="quotSelect"  className="bg-zinc-200 h-auto mb-2 w-5/6 texte-xs rounded-lg hover:bg-green-400 max-sm:text-xs xl:text-2xl">
                {
                    options
                }
            </select>
        </div>  
    </Card>
}
export default QuotitePercent