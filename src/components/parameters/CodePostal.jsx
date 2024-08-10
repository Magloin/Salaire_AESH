import Card from "../base/Card"
import InputSelection from "../base/InputSelection"



function CodePostal () {



    return (<Card>
            <h2 className=" text-center font-extrabold">Saisie des Informations</h2>
            
            <InputSelection postalValue={"Code postal établissement"}/>
        </Card>
    )   
}

export default CodePostal