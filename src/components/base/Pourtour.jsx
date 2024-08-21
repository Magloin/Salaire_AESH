function Pourtour (props) {
    return (
        <div className="Border-solid  border-2 border-bleu-500 bg-blue-500/60  px-2 m-2 text-center rounded-full rounded-tr-lg rounded-bl-lg">
            
            {props.children}
        </div>
    )
}

export default Pourtour