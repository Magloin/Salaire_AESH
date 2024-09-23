
import AdressEtab from "../base/AdressEtab";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import Modal from "./Modal";

function EtablissementCardLight () {
    const data = useContext(DataContext)
    const school = data.input.school

    if (!school) {
        return
    }

    return (<div className="content-center">
        <div className="Border-solid  border-4 border-gray-600 bg-zinc-300 ml-2 text-center rounded-tr-lg rounded-bl-lg">
           <div className=""> 
                <h2 className=" text-xl font-bold  m-auto" id="police">{school.name}</h2>
                <Modal />
            </div>
            <AdressEtab/>
        </div>
    </div>)
}
    
export default EtablissementCardLight;