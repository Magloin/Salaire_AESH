import Card from "../base/Card"

function Coef() {

    let values = [371, 375, 380, 385, 395, 405, 415, 425, 435, 445, 455]
    let defaultValue = 375

    let options = values.map((value, index) => {
        return <option key={value} className="text-center" value={value}>Echelon {index + 1} ({value})</option>
    })

    return (<Card>
        <h1 className=" text-center font-extrabold">Echelon et Coefficient</h1>
        <div className="text-center pt-1 w-30"> 
            <select name="coef" id="coefEchSelect" defaultValue={defaultValue} className="bg-zinc-200 h-auto mb-2 w-5/6 rounded-lg  hover:bg-green-400">
                {
                    options
                }
            </select>
        </div>  
    </Card>)
}
export default Coef