function Checkbox(props) {
    return (<div className="text-center hover:font-bold flex-col"> 
        <div className="text-center hover:font-bold flex-col" > 
            <div className="mr-3 mb-2">
                <label className="inline-flex items-center cursor-pointer">
                    <span className="mr-1">1%</span>
                    <input type="checkbox" value="" className="sr-only peer"/>
                    <div className="relative w-11 h-6 bg-red-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                    <span className="ml-1">3%</span>
                </label>
            </div>
        </div>  
        {props.children} 
    </div>)
       

}

export default Checkbox