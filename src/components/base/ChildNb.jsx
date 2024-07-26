function ChildNb(props) {
    return (<div className="text-center pt-1 hover:font-bold"> 
        <select name="ChildNb" id="ChildNumb" defaultValue="2" className="bg-zinc-200  mb-2 h-auto w-5/6 texte-xs rounded-lg hover:bg-green-400">
            <option className="text-center" value="">-- Nombre d'enfant(s) --</option>
            <option className="text-center" value="1">1</option>
            <option className="text-center" value="2">2</option>
            <option className="text-center" value="3">3</option>
            <option className="text-center" value="4">4</option>
            <option className="text-center" value="5">5</option>
            <option className="text-center" value="6">6</option>
            <option className="text-center" value="7">7</option>
            <option className="text-center" value="8">8</option>  
        </select>
        {props.children} 
    </div>  


    )
}
export default ChildNb