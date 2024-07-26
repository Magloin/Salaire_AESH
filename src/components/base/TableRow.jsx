function TableRow(props){
    return(
        <tr className="odd:bg-gray-100 odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
            {props.children} 
       </tr>
    )
}
export default TableRow