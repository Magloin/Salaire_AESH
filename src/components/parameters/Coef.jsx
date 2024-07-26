import Card from "../base/Card"

function Coef() {
    return (<Card>
        <h1 className=" text-center font-extrabold">Echelon et Coefficient</h1>
        <div className="text-center pt-1 w-30"> 
            <select name="coef" id="coefEchSelect" className="bg-zinc-200 h-auto mb-2 w-5/6 rounded-lg  hover:bg-green-400">
                <option className="text-center" value="">-- Sélectionner votre coeficient--</option>
                <option className="text-center" value="Ech 1" data-value="371" defaultValue>Echelon 1 (371)</option>
                <option className="text-center" value="Ech 2" data-value="375">Echelon 2 (375)</option>
                <option className="text-center" value="Ech 3" data-value="380">Echelon 3 (380)</option>
                <option className="text-center" value="Ech 4" data-value="385">Echelon 4 (385)</option>
                <option className="text-center" value="Ech 5" data-value="395">Echelon 5 (395)</option>
                <option className="text-center" value="Ech 6" data-value="405">Echelon 6 (405)</option>
                <option className="text-center" value="Ech 7" data-value="415">Echelon 7 (415)</option>
                <option className="text-center" value="Ech 8" data-value="425">Echelon 8 (425)</option>
                <option className="text-center" value="Ech 9" data-value="435">Echelon 9 (435)</option>
                <option className="text-center" value="Ech 10" data-value="444">Echelon 10 (445)</option>
                <option className="text-center" value="Ech 11" data-value="455">Echelon 11 (455)</option>
            </select>
        </div>  
    </Card>)
}
export default Coef