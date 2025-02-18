function Checkbox({ leftValue, rightValue, defaultValue, setNewValue }) {

    function updateToggle(e) {
        setNewValue(e.target.checked)
    }

    return (<div className="text-center hover:font-bold flex-col px-1"> 
        <div className="text-center hover:font-bold flex-col max-sm:text-xs " > 
            <div className="m-auto mb-2 ">
                <label className="inline-flex items-center cursor-pointer">
                    <span className="md:text-sm lg:text-xl xl:text-2xl pr-1">{leftValue}</span>
                    <input type="checkbox" defaultChecked={defaultValue} onChange={updateToggle} className="sr-only peer"/>
                    <div className="mx-1 relative w-11 h-6 bg-red-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 "></div>
                    <span className="md:text-sm xl:text-2xl pl-1 lg:text-xl ">{rightValue}</span>
                </label>
            </div>
        </div>  
        
    </div>)
       

}

export default Checkbox