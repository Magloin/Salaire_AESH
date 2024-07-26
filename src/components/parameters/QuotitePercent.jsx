import Card from "../base/Card"

function QuotitePercent() {
    return <Card>
        <h1 className="text-lg text-center font-extrabold">Quotité</h1>
        <div className="text-center pt-1 hover:font-bold"> 
            <select name="quot" id="quotSelect" className="bg-zinc-200 h-auto mb-2 w-5/6 texte-xs rounded-lg hover:bg-green-400">
                <option className="text-center" value="">-- Sélectionner votre quotité --</option>
                <option className="text-center" value="50">50 %</option>
                <option className="text-center" value="52">52 %</option>
                <option className="text-center" value="57">57 %</option>
                <option className="text-center" value="60">60 %</option>
                <option className="text-center" value="62"defaultValue>62 %</option>
                <option className="text-center" value="66">66 %</option>
                <option className="text-center" value="70">70 %</option>
                <option className="text-center" value="80">80 %</option>
                <option className="text-center" value="90">90 %</option>
                <option className="text-center" value="100">100%</option>
            </select>
        </div>  
    </Card>
}
export default QuotitePercent