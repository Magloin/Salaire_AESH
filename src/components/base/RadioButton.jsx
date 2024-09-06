function RadioButton ({ value, labelValue, isChecked, setNewValue }) {

    function updateToggle(e) {
        if (e.target.checked) {
            setNewValue(value)
        }
    }

    return (<div className="flex items-center h-auto m-2 justify-center ">
        <input id="default-radio-1" type="radio" name="default-radio" checked={isChecked} onChange={updateToggle} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "/>
        <label htmlFor="default-radio-1" className="ms-2 text-sm font-bold text-gray-900 dark:text-gray-300">{ labelValue }</label>
    </div>)
}

export default RadioButton