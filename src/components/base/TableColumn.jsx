function TableColumn(props){
    return(
        <td className="px-6 py-4 pr-2  text-base text-right font-bold">
            { props.children }
        </td>
    )
}
export default TableColumn