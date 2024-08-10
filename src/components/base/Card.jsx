function Card(props) {
    return (<div className="bg-white border-solid border-4 border-gray-600 h-auto m-2 pb-2  shadow-lg rounded-tr-lg rounded-bl-lg hover:border-green-400">
        {props.children}
    </div>)
}

export default Card