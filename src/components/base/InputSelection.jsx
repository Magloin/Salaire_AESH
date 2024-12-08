function InputSelection ({textValue, updateText}) {
   return (<div className="w-5/6 h-auto m-auto   md:w-5/6 px-3 mb-6 md:mb-0 max-sm:m-0">
      <input onChange={e => updateText(e.target.value)} defaultValue={textValue} className="appearance-none block w-full text-center font-extrabold bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 max-sm:py-0 max-sm:px-0 md:text-xs md:py-2 md:px-2 lg:text-3xL" id="grid-zip" type="text" placeholder="76410"/>
   </div>)
}

export default InputSelection