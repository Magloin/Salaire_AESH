import Card from "../base/Card"
import InputSelection from "../base/InputSelection"



function CodePostal ({textValue}) {

    let textValue = "Code postal établissement"

    return (<Card>
            <h2 className=" text-center font-extrabold">Saisie des Informations</h2>
            <InputSelection postalValue={`${textValue}`}/>
        </Card>
    )   
}

export default CodePostal