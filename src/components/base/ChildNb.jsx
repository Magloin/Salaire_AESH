import { useContext } from "react"
import { DataContext, DataDispatchContext } from "../../contexts/DataContext"

function ChildNb(props) {
    let values = [1,2,3,4,5,6,7,8]

    console.log("DEFAULT VALUE", props.defaultValue)

    if (props.handleZero) {
        values.unshift(0)
    }

    let options = values.map((value,index)=> {
        return <option key={index} className="text-center" value={value}>{value}</option>
    })

    function handleChange(newValue) {
        props.handleChange(newValue)
    }

    return (<div className="text-center pt-1 hover:font-bold"> 
        <select onChange={e => handleChange(e.target.value)} name="ChildNb" id="ChildNumb" defaultValue={props.defaultValue} className="bg-zinc-200  mb-3 h-auto w-5/6 texte-xs rounded-lg hover:bg-green-400">
        {
            options
        }
        </select>
        {props.children} 
    </div>  
    )
}
export default ChildNb