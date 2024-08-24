function Pourtour (props) {
    return (
        <div className="Border-solid  border-2 border-gray-600 bg-indigo-400  px-2 m-2 text-center rounded-full rounded-tr-lg rounded-bl-lg">
            
            {props.children}
        </div>
    )
}

export default Pourtour