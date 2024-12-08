function Card(props) {
    return (<div className="m-2 max-sm:text-xs max-sm:m-0 max-sm:my-1">
    <div className="bg-white border-solid border-4 border-gray-600 h-auto mr-2 ml-2 shadow-lg rounded-tr-lg rounded-bl-lg hover:border-green-400 max-sm:mr-0.5 max-sm:ml-1">
        {props.children}
    </div>
    </div>)
}

export default Card